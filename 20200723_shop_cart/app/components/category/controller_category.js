import ViewCategory from "./view_category.js";
import ModelCategory from "./model_category.js";

export default class ControllerCategory{
    constructor({ publish, subscribe }){
        this.model = new ModelCategory();
        this.view = new ViewCategory(this.handleClickCategory);

        this.publish = publish;
        this.subscribe = subscribe;

        this.subscribe('LOAD_CATEGORIES', this.handleLoadCategories);
    }

    handleLoadCategories = categories => {
        console.log(categories);
        this.view.renderCategories([...categories]);
    }

    handleClickCategory = ev => {
        console.log(ev.target.dataset.category);
    }

}