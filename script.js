function mostrarMensagem(){
    alert("A sustentabilidade no campo garante produtividade, preservação ambiental e qualidade de vida para as futuras gerações.");
}

// Contador animado
let numero = document.getElementById("numero");
let valor = 0;

let contador = setInterval(() => {

    valor += 10;
    numero.textContent = valor.toLocaleString();

    if(valor >= 5000){
        clearInterval(contador);
    }

}, 20);
const topo = document.getElementById("topo");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 300){
        topo.style.display = "block";
    }else{
        topo.style.display = "none";
    }
});

topo.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});