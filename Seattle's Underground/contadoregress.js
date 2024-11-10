const dataEvento = new Date('2024-12-19T17:00:00').getTime();
const contagem = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora
    if (distancia <= 0){
        clearInterval(contagem);
        document.getElementById("contador").innerHTML = `Evento já começou!`;
        return;
    }
    else{
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("contador").innerHTML = `Faltam ${dias}dias ${horas}h${minutos}min`;
        }
}, 1000);
