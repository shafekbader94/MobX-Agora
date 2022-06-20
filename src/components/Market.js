import React, { useState } from "react";
import { observer } from "mobx-react";
import Item from "./Item";

function Market(props) {
  const [itemName, setItemName] = useState("");

  const handleInput = (e) => {
    setItemName(e.target.value);
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      console.log(props);
      props.store.addItem(itemName);
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

      <ul>
        {props.store.items.map((i, index) => (
          <Item store={props.store} data={i} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default observer(Market);
