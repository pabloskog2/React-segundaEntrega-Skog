import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="qty-display">1</div>
    </div>
  );
};

export default CartWidget;
