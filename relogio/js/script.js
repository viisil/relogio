let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_segundo');
let mElement = document.querySelector('.p_minuto');
let hElement = document.querySelector('.p_hora');

/* função que busca a hora exata */
function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    /* Rotação dos ponteiros */

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

/* função que insere o zero na frente de numeros menores de 10*/
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}


setInterval(updateClock, 1000);
updateClock();

