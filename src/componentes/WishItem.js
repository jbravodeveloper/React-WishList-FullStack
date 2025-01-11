import React from "react";
import "./WishItem.css";

const WishItem = ({ wish, onRemove, onEdit }) => {
  return (
    <li className="wish-item">
      <span>{wish.title}</span>
      <button onClick={() => onRemove(wish.id)}>Remove</button>
    </li>
  );
};

export default WishItem;