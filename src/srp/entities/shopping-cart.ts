import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(cartItem: CartItem): void {
    this._items.push(cartItem);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, { price }) => (total += price), 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');

    this._items.length === 0;
  }
}
