let boton=document.getElementById("btnArriba");

window.onscroll=function(){

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
boton.style.display="block";
}else{
boton.style.display="none";
}

};

function volverArriba(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}