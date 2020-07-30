import ModelProduct from "./model_product.js";
import ViewProduct from "./view_product.js";

export default class ControllerProduct{
    constructor({ publish, subscribe }){
        this.model = new ModelProduct();
        this.view = new ViewProduct(this.handleClickBuyProduct);

        this.publish = publish;
        this.subscribe = subscribe;

        this.subscribe('GET_PRODUCTS_TO_CART', this.handleGetProducts);

        this.loadProducts();        
    }

    async loadProducts(){
        const products = await this.model.loadProducts();
        this.view.render(products);
    }

    handleClickBuyProduct = ev => {
        const id = ev.target.dataset.productId;
        if(id){
            console.log(`Купили ${id}`);
            this.publish('ADD_TO_CART', id);
        }
    }

    handleGetProducts = (ids) => {
        const products = this.model.getProductsByIds(ids);
        this.publish('SET_PRODUCTS_TO_CART', products);
    }
}