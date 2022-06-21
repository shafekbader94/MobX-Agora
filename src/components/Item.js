import React from "react";
import { observer, inject } from "mobx-react";

function Item(props) {
  const { name, price, quantity } = props.data;

  const buyItem = () => props.Inventory.buyItem(name);

  const changePrice = () => {
    const price = prompt("New price");
    props.Inventory.changePrice(name, price);
  };

  return (
    <li onDoubleClick={changePrice}>
      {quantity} {name}s available at ${price} per item
      <button onClick={buyItem}>Buy</button>
    </li>
  );
}

export default inject("Inventory")(observer(Item))
