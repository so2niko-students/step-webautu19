const num = Number(prompt('Enter a number'));
let answ;
// if(num % 2 == 0){
//     answ = 'Оно чётное';
// }else{
//     answ = 'Оно нечётное';
// }

// num % 2 == 0? answ = 'Чётное': answ = 'Нечётное';
answ = num % 2 == 0? 'Чётное': 'Нечётное';

console.log(answ);