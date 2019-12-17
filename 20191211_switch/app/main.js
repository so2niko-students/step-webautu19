/**
 * 1. Спросить уровень программирования
 * 2. Рассчитать ЗП
 * 3. Вывести ЗП на экран
 */

let salary = 'Your level is underthinking';
const lvl = prompt('Enter your programming level(Junior, Middle, Senior, Architect)');
switch(lvl){
    case 'Junior':{
        salary = 350;
        break;
    }
    case 'Middle':{
        salary = 1000;
        break;
    }
    case 'Senior':{
        salary = 3500;
        break;
    }
    case 'Architect':{
        salary = 6000;
        break;
    }
    default:{
        salary = 0;
    }
}

alert('Your salary is ' + salary);