double(3, 343, 4343, 6565, "ааааааа");
summ(1,2,3,4,6,888,3233,546,46,3);

//function declaration
function double(a = 0){ //default values
    // console.log(arguments);//массиво-подобный объект
    console.log('double', a * 2);
    if(isNaN(a * 2)){
        return 'Error. Enter a number, please!';
    }
    return a * 2;
    
    //всё пропадёт и не выполнится начиная с этой строки функции
    console.log('Интересно');
    //
}

function summ(){
    let s = 0;
    const len = arguments.length;

    for(let i = 0; i < len; i++){
        s += parseFloat(arguments[i]);
    }

    console.log('Summ: ', s);
}

//function expression
let tripple = function(cc, d, c = 'information', fff){//аргументы функции
    console.log(arguments);//массиво-подобный объект
    console.log('tripple', c);
    console.log(cc * 3);
};

function comp(a, b){
    return a - b;
}

tripple(4);

showInfo('Днепр');

let arr = [33, 2, 8, 44, 7, 66, 90, 23];

arr.sort(function(a, b){
    return a - b;
});
/**
 * Плюсы аннонимных функций:
 * Не засоряет память
 * Не нужно придумывать имена
 * Лаконичность написания
 * Нет страха, что переприсвоишь имя функции на другое
 */

console.log(arr);
/*

*/

//Тип одноразовых тут же запускаемых функций
//Самовызываемые функции
(function(){
    console.clear();
    console.log('Программа запущена');
})();

// start();


//Arrow function -- стрелочные функции
//Lexical Environment
//своего this нет

arr.sort((a, b) => a - b);
// arr.sort((a, b) =>{
//     let c  = a + b / 3;
//     return a - b;
// });

console.log(arr);