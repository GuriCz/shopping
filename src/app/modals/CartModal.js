"use client";
import React from "react";
//I thought about using this but found it doesnt make a lot of sense because it will be always pinned to the side as it exists inside the shopping cart div
function CartModal({ cartItems, handleRemoveFromCart, totalCost, onClose }) {
  return (
    <div className="cart-modal-container">
      <div className="bg-gray-100 p-8 rounded shadow text-neutral">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <img
                src={item.thumbnail}
                alt="picture of product"
                className="w-full h-auto max-h-40 object-contain"
              />
              <button
                className="shopping-cart-remove-button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="total">
          <p className="font-bold">Total Cost: ${totalCost()}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-primary text-black rounded"
        >
          Close
        </button>
        </div>
      </div>
  );
}

export default CartModal;
