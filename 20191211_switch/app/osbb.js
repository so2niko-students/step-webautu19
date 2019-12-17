const num = Number(prompt('Введите номер квартиры'));
let answ;

switch(num){
    case 11:
    case 62:
    case 73:{
        answ = 'ВНИМАНИЕ!\n Подойдите к управляющему!!!';
        break;
    }
    case 6:
    case 10:
    case 20:
    case 42:
    case 43:{
        answ = 'Всё хорошо.\nВ этот раз вам удалось избежать проблем.'
        break;
    }
    default:{
        answ = 'Вы молодец!';
    }
}

console.log(answ);
