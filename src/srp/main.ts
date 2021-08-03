import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

// SRP = Single Responsability Principle
// cada classe/objeto so deve fazer as tarefa relacionadas ao seu dominio

const shoppingCart = new ShoppingCart();
const messaging = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 54.6));
shoppingCart.addItem(new Product('Caderno', 12.5));
shoppingCart.addItem(new Product('Lapis', 1.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
