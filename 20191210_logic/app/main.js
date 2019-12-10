let d = 3 == 4; //false
/**==
 * ===
 * >
 * <
 * <=
 * >=
 * !=
 * !==
 */
console.log(d);
let c = !100;
console.log(c);

//Условие
let answ = '';
let test = prompt('Введите число от 1 до 10');
if(test >= 1){
    if(test <= 10){
        answ = 'Спасибо. Вы ввели положительное';
    }else{
        answ = 'Вы ввели слишком большое число';
    }
}else{
    answ = 'Слишком маленькое';
}

alert(answ);
