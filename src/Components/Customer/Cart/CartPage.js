import React from "react";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  

  return (
    <div className="cart">
      <div className="cart-header">Cart</div>

      {cartItems.length === 0 && <div className="empty-cart">no items</div>}

      <div>
        {cartItems.map((item) => (
          <div className="cart-list" key={cartItems.indexOf(item)}>
            <img className="cart-img" src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
