const products=[
  {id:"small",name:"Small Eggs",price:4500,label:"Everyday value",image:"./assets/eggs-room.jpeg"},
  {id:"medium",name:"Medium Eggs",price:5000,label:"The house favourite",image:"./assets/eggs-close.jpeg"},
  {id:"big",name:"Big Eggs",price:5500,label:"Fuller, generous size",image:"./assets/eggs-room.jpeg"}
];
let cart=JSON.parse(localStorage.getItem("daily-farm-cart")||"{}");
const money=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
const grid=document.querySelector("#product-grid"),bag=document.querySelector(".bag-button"),count=document.querySelector(".bag-count"),drawer=document.querySelector(".cart"),backdrop=document.querySelector(".cart-backdrop"),body=document.querySelector("#cart-body"),footer=document.querySelector("#cart-footer"),toast=document.querySelector(".toast");

grid.innerHTML=products.map((p,i)=>`<article class="product-card"><div class="product-visual"><img src="${p.image}" alt="${p.name} in 30-egg crates" loading="${i?"lazy":"eager"}"><span class="size-badge">30 eggs · 1 crate</span><button class="quick-add" data-add="${p.id}">Add one crate</button></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.label}</p></div><div class="product-price">${money(p.price)}<br><small>temporary price</small></div></div></article>`).join("");

function save(){localStorage.setItem("daily-farm-cart",JSON.stringify(cart));renderCart()}
function totalQty(){return Object.values(cart).reduce((a,b)=>a+b,0)}
function openCart(){drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");bag.setAttribute("aria-expanded","true");backdrop.hidden=false;document.body.style.overflow="hidden"}
function closeCart(){drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");bag.setAttribute("aria-expanded","false");backdrop.hidden=true;document.body.style.overflow=""}
function notify(message){toast.textContent=message;toast.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove("show"),2200)}
function renderCart(){
  const qty=totalQty();count.textContent=qty;count.setAttribute("aria-label",`${qty} crate${qty===1?"":"s"}`);
  const items=products.filter(p=>cart[p.id]);
  if(!items.length){body.innerHTML='<div class="empty-cart"><div><p class="eyebrow">Your bag is empty</p><p>Choose a crate from the daily collection.</p></div></div>';footer.innerHTML="";return}
  body.innerHTML=items.map(p=>`<div class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><p>30 eggs per crate</p><div class="quantity"><button data-dec="${p.id}" aria-label="Remove one crate of ${p.name}">−</button><span>${cart[p.id]}</span><button data-inc="${p.id}" aria-label="Add one crate of ${p.name}">+</button></div></div><div><strong>${money(p.price*cart[p.id])}</strong><br><button class="remove" data-remove="${p.id}">Remove</button></div></div>`).join("");
  const subtotal=items.reduce((sum,p)=>sum+p.price*cart[p.id],0);
  footer.innerHTML=`<div class="subtotal"><span>Estimated subtotal</span><strong>${money(subtotal)}</strong></div><p class="cart-note">Delivery and wholesale pricing are confirmed with you before payment.</p><button class="checkout" type="button">Confirm order on WhatsApp</button>`;
}
function whatsappOrder(){
  const lines=products.filter(p=>cart[p.id]).map(p=>`• ${p.name}: ${cart[p.id]} crate${cart[p.id]>1?"s":""} (${money(p.price*cart[p.id])})`);
  const subtotal=products.reduce((sum,p)=>sum+(cart[p.id]||0)*p.price,0);
  const message=["Hello Daily Home Use Farm, I would like to order:","",...lines,"",`Estimated retail subtotal: ${money(subtotal)}`,"","Please confirm availability, pickup/delivery and my final total. Thank you."].join("\n");
  window.open(`https://wa.me/2348023457318?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
}
document.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;if(t.dataset.add){cart[t.dataset.add]=(cart[t.dataset.add]||0)+1;save();notify("One crate added to your bag");openCart()}if(t.dataset.inc){cart[t.dataset.inc]++;save()}if(t.dataset.dec){cart[t.dataset.dec]=Math.max(1,cart[t.dataset.dec]-1);save()}if(t.dataset.remove){delete cart[t.dataset.remove];save()}if(t.classList.contains("checkout"))whatsappOrder();if(t.classList.contains("cart-close"))closeCart()});
bag.addEventListener("click",openCart);backdrop.addEventListener("click",closeCart);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});renderCart();
