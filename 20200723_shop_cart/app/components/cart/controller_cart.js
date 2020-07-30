import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor({ subscribe }){

        this.model = new ModelCart();
        this.view = new ViewCart();

        this.subscribe = subscribe;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
    }

    handleAddToCart = (id) => {
        const count = this.model.addToCart(id);
        this.view.renderCartCount(count);
    }
}