import ControllerProduct from './components/product/controller_product.js';
import Publisher from './helpers/publisher.js';
import ControllerCart from './components/cart/controller_cart.js';

const publisher = new Publisher();

const products = new ControllerProduct(publisher.methods);
const cart = new ControllerCart(publisher.methods);