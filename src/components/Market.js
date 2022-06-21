import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import Item from "./Item";


function Market(props) {
  const [itemName, setItemName] = useState("");

  const handleInput = (e) => {
    setItemName(e.target.value);
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      console.log(props);
      props.Inventory.addItem(itemName);
      setItemName("");
    }
  };
  return (
    <div>
      <div>
        <input
          name="item"
          placeholder="add item"
          type="text"
          value={itemName}
          onChange={handleInput}
          onKeyPress={enterPress}
        />
      </div>
<h4>Number of items: {props.Inventory.numItems}</h4>
      <ul>
        {props.Inventory.items.map((i, index) => (
          <Item  data={i} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default inject("Inventory")(observer(Market))
