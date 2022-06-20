import { observable, makeObservable, action } from "mobx";
import { Item } from "./Item";

export class Inventory {
  constructor() {
    this.items = [];

    makeObservable(this, {
      items: observable,
      addItem: action,
      buyItem: action,
      changePrice: action,
    });
  }

  addItem = (name, price, quantity) => {
    const item = this.items.find((i) => i.name === name);
    if (item) {
      item.quantity = item.quantity + 1;
    } else {
      this.items.push(new Item(name, price, quantity));
    }
  };

  buyItem = (name) => {
    const itemIndex = this.items.findIndex((i) => i.name === name);
    const item = this.items[itemIndex];
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
    } else {
      this.items.splice(itemIndex, 1);
    }
  };

  changePrice = (name, price) => {
    const item = this.items.find((i) => i.name === name);
    item.price = price;
  };
}
