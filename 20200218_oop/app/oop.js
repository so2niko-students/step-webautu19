let o = {
    name: 'obj1',
    age : 1
};

//фУНКЦИИ-генераторы
// function Auto(numb){//lexical environment
//   this.numb = numb;
//   this.createDate = Date.now();
//   this.randomSeed = Math.floor(Math.random() * 1000000);
//   this.info = function(){
//       console.log(`${this.numb}: ${this.randomSeed}`);
//   }
// }

class Auto{
    constructor(numb){
        this.numb = numb;
        this.createDate = Date.now();
        this.randomSeed = Math.floor(Math.random() * 1000000);
    }
    info(){
        console.log(`${this.numb}: ${this.randomSeed}`);
    }
}

let i = 1000;
const cars = [];
while(i--){
  const car = new Auto(i);
  car.info();
  cars.push(car);
}

console.log(cars);


