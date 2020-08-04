export default class ModelCart{
    cart = new Map();
    constructor(){
        const lsData = localStorage.getItem('cart');
        console.log(lsData);
        if(lsData){
            this.cart = new Map(JSON.parse(lsData));
        }
    }

    addToCart(id){
        let count = 1;
        if(this.cart.has(id)){
            count += this.cart.get(id);
        }

        this.cart.set(id, count);

        localStorage.setItem('cart', JSON.stringify([ ...this.cart ]));
    }

    countCart(){
        let sum = 0;
        this.cart.forEach(count => sum += +count);
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

        this.cartProducts = products;

        return {
            price, 
            products
        };
    }

    clearCart(){
        this.cart.clear();
        localStorage.removeItem('cart');
    }

    getCartProducts(){
        return this.cartProducts;
    }

    changeCount(id, val){
        if(val > 0){
            this.cart.set(id, val);
        }else{
            this.cart.delete(id);
            this.cartProducts = this.cartProducts.filter(prod => prod.id != id);
        }

        localStorage.setItem('cart', JSON.stringify([ ...this.cart ]));
        
        return this.updateProds(this.cartProducts);
    }
}