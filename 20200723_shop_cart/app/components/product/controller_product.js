import ModelProduct from "./model_product.js";
import ViewProduct from "./view_product.js";

export default class ControllerProduct{
    constructor({ publish, subscribe, events }){
        this.model = new ModelProduct();
        this.view = new ViewProduct(this.handleClickBuyProduct);

        this.publish = publish;
        this.subscribe = subscribe;
        this.events = events;

        this.subscribe(events.GET_PRODUCTS_TO_CART, this.handleGetProducts);
        this.subscribe(events.CHANGE_CATEGORY, this.handleChangeCategory);

        this.loadProducts();        
    }

    async loadProducts(){
        const products = await this.model.loadProducts();
        this.view.render(products);

        const categories = this.model.searchCategories();
        this.publish(this.events.LOAD_CATEGORIES, categories);
    }

    handleClickBuyProduct = ev => {
        const id = ev.target.dataset.productId;
        if(id){
            this.publish(this.events.ADD_TO_CART, id);
        }
    }

    handleGetProducts = (ids) => {
        const products = this.model.getProductsByIds(ids);
        this.publish(this.events.SET_PRODUCTS_TO_CART, products);
    }

    handleChangeCategory = cat => {
        const products = this.model.getProductsByCategory(cat);

        this.view.render(products);       
    }
}