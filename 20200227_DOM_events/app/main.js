document.body.onkeypress = function(ev){
    console.clear();
    console.log('Вы нажали на кнопку');
    console.log(ev);
    // document.body.innerText += ev.key;
    react(ev.code);

}
//keydown
//keyup

const snake = {
    top: 0,
    left: 0,
    shift: 10,
    link : document.querySelector('.snake'),
    width: 260,
    height : 280,
    multi : 1,
    zoomShift : .1
};
function react(code){
    switch(code){
        case 'KeyW':{
            snake.top -= snake.shift;
            snake.link.style.top = `${snake.top}px`;
            break;
        }
        case 'KeyS':{
            snake.top += snake.shift;
            snake.link.style.top = `${snake.top}px`;
            break;
        }
        case 'KeyA':{
            snake.left -= snake.shift;
            snake.link.style.left = `${snake.left}px`;
            break;
        }
        case 'KeyD':{
            snake.left += snake.shift;
            snake.link.style.left = `${snake.left}px`;
            break;
        }
        case 'Equal':
        case 'NumpadAdd':{
            snake.multi += snake.zoomShift;
            snake.link.style.width = `${snake.width * snake.multi}px`;
            snake.link.style.height = `${snake.height * snake.multi}px`;
            break;
        }
        case "Minus":
        case 'NumpadSubtract':{
            snake.multi -= snake.zoomShift;
            snake.link.style.width = `${snake.width * snake.multi}px`;
            snake.link.style.height = `${snake.height * snake.multi}px`;
            break;
        }
    }
}