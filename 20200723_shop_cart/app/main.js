import Publisher from './helpers/publisher.js';
import ControllerProduct from './components/product/controller_product.js';
import ControllerCart from './components/cart/controller_cart.js';
import ControllerForm from './components/form/controller_form.js';
import ControllerCategory from './components/category/controller_category.js';
import ControllerNotification from './components/notification/controller_notification.js';

const publisher = new Publisher();
console.log(publisher);
const products = new ControllerProduct(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const form = new ControllerForm(publisher.methods);
const category = new ControllerCategory(publisher.methods);
const notification = new ControllerNotification(publisher.methods);