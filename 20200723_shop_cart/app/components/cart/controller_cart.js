import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor({ subscribe, publish, events }){

        this.model = new ModelCart();
        this.view = new ViewCart(this.listeners);

        this.subscribe = subscribe;
        this.publish = publish;
        this.events = events;
        this.subscribe(events.ADD_TO_CART, this.handleAddToCart);
        this.subscribe(events.SET_PRODUCTS_TO_CART, this.handleGetProducts);

        this.updateCartCount();
    }


    handleAddToCart = (id) => {
        this.model.addToCart(id);
        this.updateCartCount();
    }

    updateCartCount(){
        const cartCount = this.model.countCart();
        this.view.renderCartCount(cartCount);
    }
    
    handleGetProducts = (products) => {
        const prods = this.model.updateProds(products);
        this.view.renderModal(prods);
    }

    handleOpenModal = () => {
        const ids = this.model.getCartProdId();
        this.publish(this.events.GET_PRODUCTS_TO_CART, ids);  
    }    

    handleCloseModal = () => {
        this.view.closeModal();
    }

    handleClearCart = () => {
        this.model.clearCart();
        this.view.closeModal();
        this.view.renderCartCount(0);
    }

    handleBuyCart = () => {
        this.publish(this.events.BUY, this.model.getCartProducts());
    }

    handleChangeProdCount = ev => {
        const value = ev.target.value;
        const id = ev.target.dataset.id;
        const products = this.model.changeCount(id, value);
        this.view.renderModal(products);
        this.updateCartCount();
    }

    get listeners(){
        return {
            open    : this.handleOpenModal,
            close   : this.handleCloseModal,
            clear   : this.handleClearCart,
            buy     : this.handleBuyCart,
            count   : this.handleChangeProdCount
        }
    }
}