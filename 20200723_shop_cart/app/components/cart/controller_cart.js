import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor({ subscribe, publish }){

        this.model = new ModelCart();
        this.view = new ViewCart(this.handleOpenModal);

        this.subscribe = subscribe;
        this.publish = publish;
        this.subscribe('ADD_TO_CART', this.handleAddToCart);
        this.subscribe('SET_PRODUCTS_TO_CART', this.handleGetProducts);
    }

    handleAddToCart = (id) => {
        const count = this.model.addToCart(id);
        this.view.renderCartCount(count);
    }

    handleOpenModal = () => {
        const ids = this.model.getCartProdId();
        this.publish('GET_PRODUCTS_TO_CART', ids);

        
    }

    handleGetProducts = (products) => {
        const prods = this.model.updateProds(products);
        this.view.renderModal(prods);
    }
}