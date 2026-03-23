let elementos=document.querySelectorAll(".servicio, .galeria img")

let observer=new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.classList.add("visible")

}

})

})

elementos.forEach(el=>{
observer.observe(el)
})