const box = {
    maxSize : 30,
    elements : [
        {
            name : 'Шарф',
            value : 2
        },
        {
            name : "Старая обувь",
            value : 15
        },
        {
            name : 'Несезонная одежда',
            value : 10
        }
    ],
    //return size of free space
    getFreeSpace : function(){
        //TODO: array methods
        const len = this.elements.length;
        let currentSize = 0;
        for(let i = 0; i < len; i++){
            currentSize += this.elements[i].value;
        }
        return this.maxSize - currentSize;
    },
    //return obj with name == name, or false
    getSomething(name = ''){//Сокращенная форма описания метода
        const len = this.elements.length;
        let result = false;
        for(let i = 0; i < len; i++){
            if(name == this.elements[i].name){
                result = this.elements.splice(i, 1); 
                break;
            }
        }

        return result;
    },
    //return true - if added, false - if not 
    addSomething(name, value){
        if(value > this.getFreeSpace()){
            return false;
        }

        // this.elements.push({
        //     name : name,
        //     value : value
        // });
        this.elements.push({name, value});
        return true;
    } 
};

// console.log('Free space: ', box.getFreeSpace());
// // box.elements.pop();
// console.log(box.getSomething('Инструменты'));
// console.log('Free space: ', box.getFreeSpace());
// console.log('Add Gloves: ', box.addSomething('Перчатки', .5));
// console.log(box.elements);


//Шаблон коробки
//get size, array of elements
//add methods
//return box-object


//Функция-генератор
function Box(size, elements){
    this.maxSize = size;
    this.elements = elements;
    //return size of free space
    this.getFreeSpace = function(){
        const len = this.elements.length;
        let currentSize = 0;
        for(let i = 0; i < len; i++){
            currentSize += this.elements[i].value;
        }
        return this.maxSize - currentSize;
    };
    //return obj with name == name, or false
    this.getSomething = function(name = ''){
        const len = this.elements.length;
        let result = false;
        for(let i = 0; i < len; i++){
            if(name == this.elements[i].name){
                result = this.elements.splice(i, 1); 
                break;
            }
        }

        return result;
    };
    //return true - if added, false - if not 
    this.addSomething = function(name, value){
        if(value > this.getFreeSpace()){
            return false;
        }
        this.elements.push({name, value});
        return true;
    };
}

const futureBoxes = [];
// console.log(boxesData);
const boxesLen = boxesData.length;
for(let i = 0; i < boxesLen; i++){
    // console.log(i, boxesData[i]);
    const bLen = boxesData[i][0];
    const bElements = boxesData[i].slice(1);
    futureBoxes.push(new Box(bLen, bElements));
}

//instance

console.log(futureBoxes);
futureBoxes[0].getSomething('Старая обувь');
