import ViewNotification from "./view_notification.js";

export default class ControllerNotification{
    constructor({ subscribe, events }){
        subscribe(events.ADD_TO_CART, this.handleAddToCart);
        this.view = new ViewNotification();
    }

    handleAddToCart = () => {
        this.view.renderAddToCart();
    }
}