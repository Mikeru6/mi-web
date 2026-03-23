let imagenes=document.querySelectorAll(".galeria img")
let lightbox=document.getElementById("lightbox")
let grande=document.getElementById("imagenGrande")

imagenes.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex"
grande.src=img.src
})
})

lightbox.addEventListener("click",()=>{
lightbox.style.display="none"
})