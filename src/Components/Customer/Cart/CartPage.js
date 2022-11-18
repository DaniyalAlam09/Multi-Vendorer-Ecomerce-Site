import React from "react";
import { CartProvider, useCart } from "react-use-cart";

function CartPage() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item._id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item._id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item._id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CartPage;
