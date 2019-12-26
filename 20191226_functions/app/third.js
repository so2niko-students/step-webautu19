function summator(a = 0, b = 0){//аргументы по умолчанию
    // a = a || 0;
    // b = b || 0;
    console.log(a, b);
    let c = a + b;
    return c;
}

console.log(summator(1,33));
console.log(summator(1,3,4,55,66,77,3,2,33));

function s(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d;
}

console.log(s(1,2));