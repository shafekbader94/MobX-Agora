import React from "react";
import { observer } from "mobx-react";

function Item(props) {
  const { name, price, quantity } = props.data;

  const buyItem = () => props.store.buyItem(name);

  const changePrice = () => {
    const price = prompt("New price");
    props.store.changePrice(name, price);
  };

  return (
    <li onDoubleClick={changePrice}>
      {quantity} {name}s available at ${price} per item
      <button onClick={buyItem}>Buy</button>
    </li>
  );
}

export default observer(Item);
