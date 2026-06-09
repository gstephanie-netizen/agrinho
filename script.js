function mostrarTema(tema){
    alert("🌱 Você selecionou: " + tema);
}

function dicaAgua(){
    alert(
        "💧 Dica Sustentável:\n\n" +
        "Feche torneiras quando não estiver utilizando e utilize sistemas de irrigação eficientes."
    );
}

function dicaReciclagem(){
    alert(
        "♻️ Dica Sustentável:\n\n" +
        "Separe resíduos recicláveis e incentive a reutilização de materiais."
    );
}

function dicaAgro(){
    alert(
        "🌿 Dica Sustentável:\n\n" +
        "Utilize práticas agrícolas que preservem o solo e reduzam impactos ambientais."
    );
}

/* Mensagem inicial */

window.onload = function(){
    setTimeout(() => {
        alert(
            "🌱 Bem-vindo ao Agro Forte!\n\n" +
            "Conheça práticas sustentáveis que ajudam a preservar o meio ambiente."
        );
    }, 1000);
};