import ModelForm from "./model_form.js";
import ViewForm from "./view_form.js";

export default class ControllerForm{
    constructor({ subscribe, events }){
        this.model = new ModelForm();
        this.view = new ViewForm(this.handleOrder);

        this.subscribe = subscribe;

        this.subscribe(events.BUY, this.handleBuy);
    }

    handleBuy = (products) => {
        this.model.setProductCart(products);
        this.view.renderForm();
    }

    handleOrder = (ev) => {
        const userData = this.view.getData(ev);
        this.model.sendOrder(userData);
        this.view.closeModal();
    }
}