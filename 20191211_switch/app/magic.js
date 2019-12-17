let answ = '';
const speed = Number(prompt('Enter your speed'));

switch(true){
    case speed <= 20:{
        answ = 'Вы ехали слишком медленно!';
        break;
    }
    case speed >= 120 :{
        answ = 'Вы превысили скорость';
        break;
    }
    // case (speed > 20) && (speed < 120):{
    case speed > 20 :{
        answ = 'Вы ехали в разрешенном диапазоне скоростей';
        break;
    }
}

console.log(answ);