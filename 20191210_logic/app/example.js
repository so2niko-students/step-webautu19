/**
 * Пользователь вводит 3 числа
 * Пользователь вводит операцию 
 *             ( показать сумму чисел,
 *               показать среднее значение чисел)
 * 
 */

 let pizza1 = Number(prompt('Введите цену за первую пиццу')),
    pizza2 = Number(prompt('Введите цену за первую пиццу')),
    pizza3 = Number(prompt('Введите цену за первую пиццу')),
    choice = prompt('Что хотите увидеть: \n s - общая стоимость \n e - средняя стоимость \n g - увидеть скидку 10%');

let answ = 0;

if(choice == 's'){
    answ = pizza1 + pizza2 + pizza3;
}
if(choice == 'e'){
    answ = (pizza1 + pizza2 + pizza3) / 3;
}
if(choice == 'g'){
    answ = (pizza1 + pizza2 + pizza3) * 0.1;
}

alert(answ);

