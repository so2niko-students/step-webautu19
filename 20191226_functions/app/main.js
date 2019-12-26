// let a = enterNum(),
//     b = prompt('Enter a number from 1 to 100'),
//     c = prompt('Enter a number from 1 to 100');

// checkNums(a);
// checkNums(b);
// checkNums(c);

function checkNums(num/**Аргументы функции */){//Function Declaration
    if(num < 1 || num > 100 || isNaN(num)){
        console.log('Ошибочные данные: ', num);
    }else{
        console.log('Данные верны: ', num);
    }
    //Тело функции
}

const enterNum = function(t, f, dd, aa){//Function Expression
    t *= 2;
    console.log(t,f,dd,aa);//Lexical Environment
};

const aa = enterNum;
let i = 10;
aa(i, 2, 3, 4);
console.log(i);
console.log(aa == enterNum);