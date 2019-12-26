//Глобальные переменные
let count = 10;



//Локальные переменные

function ccb(){
    count = 100;//локальная переменная
    while(--count){
        console.log(count);
    }
}

ccb();

console.log("count: ", count);