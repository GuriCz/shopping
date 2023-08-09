"use client";
import React, { useState } from "react";
import "../globals.css";

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //herz an aus
  const [favoriteItems, setFavoriteItems] = useState({});

  const handleRemoveFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const totalCost = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return total;
  };

  //auf zu
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  //herz ja nein
  const handleToggleFavorite = (itemId) => {
    setFavoriteItems((prevFavorites) => ({
      ...prevFavorites,
      [itemId]: !prevFavorites[itemId],
    }));
  };

 //leeren
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className={`shopping-cart ${isExpanded ? "expanded" : ""}`}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="shopping-cart-item">
            <div className="item-info">
              <p className="item-title">{item.title}</p>
              <p className="item-price">${item.price}</p>
            </div>
            {isExpanded && (
              <div className="item-actions">
                <button
                  className="shopping-cart-favorite-button"
                  onClick={() => handleToggleFavorite(item.id)}
                >
                  <img
                    src={
                      favoriteItems[item.id]
                        ? "/red-heart.png"
                        : "/black-heart.png"
                    }
                    alt={favoriteItems[item.id] ? "Favorite" : "Not Favorite"}
                    className={`heart-icon ${
                      favoriteItems[item.id] ? "favorite" : ""
                    }`}
                    width={16}
                    height={16}
                  />
                </button>
                <button
                  className="shopping-cart-remove-button"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="total">
        <p className="font-bold">Total Cost: ${totalCost()}</p>
      </div>
      <div>
        <button onClick={handleToggleExpand} className="button-yellow">
          {isExpanded ? "Collapse" : "Expand Details"}
        </button>
        <button className="button-green">Checkout</button>
        <button onClick={handleClearCart} className="button-red">Clear All</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
