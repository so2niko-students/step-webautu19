export default class ViewCart{
    domCartCount = document.querySelector('.cart_count');

    constructor(){

    }

    renderCartCount(count){
        this.domCartCount.innerText = count;
    }
}