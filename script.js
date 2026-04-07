// CURSOR
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";
});

// DARK MODE CON PERSISTENCIA
const darkModeBtn = document.getElementById("darkMode");
const body = document.body;

// 1. Al cargar la página, revisar si ya estaba activado antes
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if (darkModeBtn) darkModeBtn.textContent = "☀️"; // Cambia el icono si quieres
}

// 2. Evento del botón
darkModeBtn?.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // 3. Guardar la elección del usuario
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "☀️"; 
    } else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "🌙";
    }
});

// SCROLL
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});
document.querySelectorAll("section").forEach(sec=>observer.observe(sec));

// SAKURA 🌸
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

function createPetal(){
return {
x:Math.random()*canvas.width,
y:Math.random()*-canvas.height,
size:Math.random()*8+4,
speedY:Math.random()*2+1,
speedX:Math.random()*1-0.5,
rotation:Math.random()*360
};
}

for(let i=0;i<40;i++) petals.push(createPetal());

function drawPetal(p){
ctx.fillStyle="rgba(255,182,193,0.8)";
ctx.beginPath();
ctx.ellipse(p.x,p.y,p.size,p.size/2,p.rotation,0,Math.PI*2);
ctx.fill();
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
petals.forEach(p=>{
p.y+=p.speedY;
p.x+=p.speedX;
p.rotation+=0.01;

if(p.y>canvas.height){
p.y=-10;
p.x=Math.random()*canvas.width;
}

drawPetal(p);
});
requestAnimationFrame(animate);
}

animate();

// MENU HAMBURGUESA
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle?.addEventListener("click", ()=>{
menu.classList.toggle("active");
});

// Asegurar que el código corre cuando el HTML esté listo
document.addEventListener("DOMContentLoaded", () => {
    
    // SLIDER AUTOMÁTICO PRO
    const slides = document.querySelectorAll(".slide");
    
    // Verificación de seguridad: ¿Existen slides?
    if (slides.length === 0) {
        console.error("No se encontraron elementos con la clase .slide. Revisa tu HTML.");
        return;
    }

    let currentIndex = 0;
    const tiempoCambio = 3000; // 3 segundos

    function showNextSlide() {
        // 1. Quitar 'active' a la actual
        slides[currentIndex].classList.remove("active");
        
        // 2. Calcular siguiente índice (con reinicio automático al llegar a 10)
        currentIndex = (currentIndex + 1) % slides.length;
        
        // 3. Añadir 'active' a la nueva
        slides[currentIndex].classList.add("active");
    }

    // Ejecutar el cambio cada X segundos
    setInterval(showNextSlide, tiempoCambio);
    
    console.log("Slider inicializado con " + slides.length + " imágenes.");
});;

document.querySelector('.contacto-form')?.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se refresque
    alert('¡Gracias por contactar con CosplayStore! Te responderemos pronto.');
    e.target.reset(); // Limpia los datos del formulario
});

