"use client";
import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-neutral">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img
          src={product.thumbnail}
          alt="Picture of product"
          className="w-full h-auto max-h-60 object-contain mb-4"
        />
        <p className="text-lg mb-2">${product.price}</p>
        <p className="text-gray-500 mb-4">
          Discount: {product.discountPercentage}%
        </p>
        <p className="text-gray-500">
          Rating: {product.rating} / 5
        </p>
        <p className="text-gray-500">Brand: {product.brand}</p>
        <p className="text-gray-500">Category: {product.category}</p>
        <button
          onClick={onClose}
          className="button-red"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;