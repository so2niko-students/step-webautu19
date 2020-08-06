import ViewCategory from "./view_category.js";
import ModelCategory from "./model_category.js";

export default class ControllerCategory{
    constructor({ publish, subscribe, events }){
        this.model = new ModelCategory();
        this.view = new ViewCategory(this.handleClickCategory);

        this.publish = publish;
        this.subscribe = subscribe;
        this.events = events;

        this.subscribe(events.LOAD_CATEGORIES, this.handleLoadCategories);
    }

    handleLoadCategories = categories => {
        this.view.renderCategories([...categories]);
    }

    handleClickCategory = ev => {
        const cat = ev.target.dataset.category;
        if(cat){
            this.publish(this.events.CHANGE_CATEGORY, cat);
        }
    }

}