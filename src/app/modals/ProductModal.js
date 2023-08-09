"use client";
import React, { useState } from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-gray-100 p-8 rounded shadow text-neutral">
        <h2 className="text-lg font-bold mb-4">
          {product.title} <br /> {product.description}
        </h2>
        <p>Price: {product.price}</p>
        <p>Discount: {product.discountPercentage}</p>
        <p>Rating: {product.rating}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <img
                src={product.thumbnail}
                alt="picture of product"
                className="w-full h-auto max-h-40 object-contain"
              />
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-primary text-black rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
