let energia = 100;
let jogoIniciado = false;

function iniciarJogo() {
    // Transição suave
    document.getElementById('tela-inicial').classList.add('hidden');
    document.getElementById('escritorio').classList.remove('hidden');
    
    jogoIniciado = true;
    cicloEnergia();
    console.log("Jogo começou!");
}

function cicloEnergia() {
    if (!jogoIniciado) return;

    let dreno = setInterval(() => {
        if (energia > 0) {
            energia -= 1;
            document.getElementById('display-energia').innerText = `POWER: ${energia}%`;
        } else {
            clearInterval(dreno);
            gameOverEnergia();
        }
    }, 4000); // 1% a cada 4 segundos
}

function toggleCameras() {
    // No futuro, aqui abriremos a tela de câmeras
    console.log("Abrindo monitor...");
}

function gameOverEnergia() {
    document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:20%;'>A ENERGIA ACABOU... <br> [SOM DE PASSOS]</h1>";
    // Aqui você pode colocar o som do Freddy tocando a música
}
