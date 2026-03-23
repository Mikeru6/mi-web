let slides = document.querySelectorAll(".slider img");
let indice = 0;

function cambiarSlide(){

slides[indice].classList.remove("activa");

indice++;

if(indice >= slides.length){
indice = 0;
}

slides[indice].classList.add("activa");

}

setInterval(cambiarSlide,4000);