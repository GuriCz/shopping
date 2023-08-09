import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onSubmit, newProduct, setNewProduct }) => {
    const [productName, setProductName] = useState(newProduct.title);
    const [productPrice, setProductPrice] = useState(newProduct.price);

  const handleSubmit = () => {
    if (!productName || productPrice <= 0) {
      console.error("Product name or price is invalid");
      return;
    }

    onSubmit({ title: productName, price: productPrice });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-content">
        <h1 className="font-bold">Add Your Own Product</h1>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
          />
        </div>
        <button className="button-green" onClick={handleSubmit}>Add Product</button>
        <button className="button-red" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProductModal;