// Número de partículas
const numParticulas = 30;
const colores = ["#b366ff","#9933ff","#cc99ff"]; // tonos morados
let particulas = [];

// Crear partículas
for(let i=0;i<numParticulas;i++){
    const div = document.createElement("div");
    div.classList.add("particula");
    div.style.background = colores[Math.floor(Math.random()*colores.length)];
    div.style.boxShadow = `0 0 10px ${div.style.background},0 0 20px ${div.style.background}`;
    div.style.left = Math.random()*window.innerWidth+"px";
    div.style.top = Math.random()*window.innerHeight+"px";
    div.style.width = (Math.random()*6+4)+"px";
    div.style.height = (Math.random()*6+4)+"px";
    div.style.opacity = Math.random();
    document.body.appendChild(div);
    particulas.push(div);
}

// Animar partículas
function animarParticulas(){
    particulas.forEach(p=>{
        let top = parseFloat(p.style.top);
        top -= (Math.random()*0.5+0.2); // velocidad
        if(top < -10) top = window.innerHeight + 10; // reinicia al salir
        p.style.top = top+"px";
    });
    requestAnimationFrame(animarParticulas);
}

animarParticulas();