function c1(){
    console.log('c1');
}

const c2 = function(){
    console.log('c2');
}
console.time('Эйфелевая башня');
console.log(setTimeout(c1, 12000));
console.log(setTimeout(c2, 6000));
console.log(setTimeout(function(){console.log('c3')}, 3000));
console.log(setTimeout(()=>console.log('c4'), 1000));
// console.log(setTimeout((function(){console.log('c5')})(), 6000));//бесполезна

let secundas = 0;
function nextS(a){
    secundas++;
    console.log(a, secundas);
}
//У Interval и TimeOut общий счетчик вызовов
// console.log('interval:', setInterval(nextS, 1000, 'Time is: '));
for(let i = 0; i < 10; i++){
    setTimeout(()=>console.count('timeOut'), 5000);
}

function timer(){
    console.log('IN function', secundas++);
    if(secundas < 5){
        setTimeout(timer, 3000);
    }else{
        console.timeEnd('Эйфелевая башня');
    }    
}

setTimeout(timer, 3000);

const obj = {a:1, b: 123213};
console.log(document.body);
console.dir(document.body);