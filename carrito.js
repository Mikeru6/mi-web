let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

function updateCart(){
const cartList = document.getElementById("cart");
const count = document.getElementById("cart-count");

if(count) count.textContent = cart.length;

if(cartList){
cartList.innerHTML="";
cart.forEach((item,index)=>{
let li=document.createElement("li");
li.textContent=item;

let btn=document.createElement("button");
btn.textContent="❌";
btn.onclick=()=>removeItem(index);

li.appendChild(btn);
cartList.appendChild(li);
});
}
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

updateCart();