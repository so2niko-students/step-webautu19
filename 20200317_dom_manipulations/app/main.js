const circles = document.querySelector('.circles');
const nulls = document.querySelector('.nulls');

document.querySelector('.btn-add-circle').addEventListener('click', ()=>{
    // circles.innerHTML += `<div class="circle">10</div>`;
    circles.appendChild(getCircle());
});

function getCircle(){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.innerText = 10;
    circle.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.4)`;
    circle.addEventListener('click', lookForCoins);
    return circle;
}

function lookForCoins(){
    let coins = +this.innerText;
    coins += circleRobbery(this.previousElementSibling);
    coins += circleRobbery(this.nextElementSibling);

    this.innerText = coins;
}

function circleRobbery(el){
    let answer = 0;
    if(el){
        let sibl = el.innerText - 1;
        if(sibl > 0){
            el.innerText = sibl;
        }else{
            el.innerText = '';
            nulls.appendChild(el);
            el.removeEventListener('click', lookForCoins);
        }
        answer = 1;
    } 

    return answer;
}

function getRandom(min = 0, max = 255){
    return Math.floor(Math.random()*(max - min) + min + 1);
}