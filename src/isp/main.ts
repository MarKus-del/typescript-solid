import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividalCustomer } from './classes/customer';

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
const shoppingCart = new ShoppingCart(new NoDiscount());
const messaging = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividalCustomer(
  'Fulano',
  'da silva',
  '154.962.659-65',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'Fulano Enterprise inc.',
  '15496265965',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 54.6));
shoppingCart.addItem(new Product('Caderno', 12.5));
shoppingCart.addItem(new Product('Lapis', 1.5));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
