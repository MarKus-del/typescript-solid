import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';

/*
 * Liskov substitution principle (Princípio da substituição de Liskov) -
 * Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
 * deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
 *
 * Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo
 * Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
 */

const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 54.6));
shoppingCart.addItem(new Product('Caderno', 12.5));
shoppingCart.addItem(new Product('Lapis', 1.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
