class Glasses{
    date = new Date();
    #price;
    constructor(age, sex, type, price){
        this.age = age;
        this.sex = sex;
        this.type = type;
        this.#price = price;
        // this.info = `Glasses ${age}, ${sex}, ${type} ${price}`;
    }
    //вычисляемые свойства
    //геттеры
    get info(){
        return `Glasses ${this.age}, ${this.sex}, ${this.type} $${this.#price}`;  
    }

    static shop(){
        return 'Магазин "Очков" - в десяточку. Мы подберем для все очки на все случаи жизни.';
    }

    static info = 'Информация об очках';

    //сеттеры
    set priceUAH(price){
        if(!isNaN(price) && price > 0 && price < Infinity){
            this.#price = price / 24.4;
            return this.#price;
        }else{
            return this.error(price);
        }
    }
    setPrice(price){
        if(!isNaN(price) && price > 0 && price < Infinity){
            this.#price = price;
            return price;
        }else{
            return this.error(price);
        }
    }
    setAge(age){
        if(['child', 'adult'].includes(age)){
            this.age = age;
            return age;
        }else{
            return this.error(age);
        }
    }
    setSex(sex){
        if(['male', 'female', 'unisex'].includes(sex)){
            this.sex = sex;
            return sex;
        }else{
            return this.error(sex);
        }
    }
    error(arg){
        return `Error. 
Bad argument ${arg}`;
    }
}

const gl1 = new Glasses('adult', 'male', 'sport', 209);
const gl2 = new Glasses('child', 'female', 'medical', 1200);

console.log(gl1);
console.log(gl2);