let ivan = {
    name    : 'Ivan',
    surname : 'Durak',
    age     : 20,
    isHuman : true,
    coins   : [],
    eagles  : 0,
    tails   : 0,
    passport: {
        doB         : "14/01/2000",
        regAddress  : `Тридесятое государство, 
            область Тридевятое Царство, 
            г. Вайс-Сити,
            ул. Героев, 200 / 3.14`,
        id          : 12309855784535485
    }
},
    konek = {
        name    : 'Кonek',
        surname : 'Gorbunok',
        age     : 10,
        isHuman : false
    };

let heroes = [ivan, konek];

for(let i = 0; i < 100; i++){
    if(Math.random() < 0.5){
        ivan.coins.push('Орёл');
        ivan['eagles']++;
    }else{
        ivan.coins.push('Решка');
        ivan.tails++;
    }
}

for(let k in ivan){
    console.log(k, ivan[k]);
}

// ivan = konek;

// console.log(heroes);

console.clear();

// console.log(heroes);
let a = {
    name : 'a',
    age : 1
},
b = {
    name : 'b',
    age : 33
};

a = b;

a.age++;

// a = 2
// b = 1

// a = 2
// b = 2

// a = 1
// b = 2

console.log(a);
console.log(b);

