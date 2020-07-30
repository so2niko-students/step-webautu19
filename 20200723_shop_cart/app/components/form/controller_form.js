import ModelForm from "./model_form.js";
import ViewForm from "./view_form.js";

export default class ControllerForm{
    constructor({ subscribe, publish }){
        this.model = new ModelForm();
        this.view = new ViewForm();

        this.subscribe = subscribe;
        this.publish = publish;
    }
}