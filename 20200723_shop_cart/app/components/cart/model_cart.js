export default class ModelCart{
    cart = new Map();
    constructor(){

    }

    addToCart(id){
        let count = 1;
        if(this.cart.has(id)){
            count += this.cart.get(id);
        }

        this.cart.set(id, count);
        return this.countCart();
    }

    countCart(){
        let sum = 0;
        this.cart.forEach(count => sum += count);
        return sum;
    }

    getCartProdId(){
        return [ ...this.cart.keys() ];
    }

    updateProds(prods){
        let price = 0;
        const products = prods.map(prod => {
            prod.count = this.cart.get(prod.id);
            price += prod.count * prod.price;
            return prod;
        });

        return {
            price, 
            products
        };
    }

    clearCart(){
        this.cart.clear();
    }
}