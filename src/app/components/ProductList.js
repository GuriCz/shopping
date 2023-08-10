"use client";
import React, { useState } from "react";
import AddProductModal from "../modals/AddProductModal";
import ProductModal from "../modals/ProductModal";

const ProductList = ({ products, setCartItems, setProducts }) => {
  //states

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [numProductsDisplayed, setNumProductsDisplayed] = useState(12);
  const [searchWord, setSearchWord] = useState("");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: "", price: 0 });

  //handling

  const handleOpenAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const handleCloseAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const handleShowMoreProducts = () => {
    setNumProductsDisplayed((prevNumProducts) => prevNumProducts + 6);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (event) => {
    const word = event.target.value;
    setSearchWord(word);
  };

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleAddProductSubmit = () => {
    const productData = {
      title: newProduct.title,
      price: newProduct.price,
    };

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New product added:", data);
        setProducts((prevProducts) => [...prevProducts, data]);

        // Clear the input fields
        setNewProduct({ title: "", price: 0 });

        handleCloseAddProductModal();
      })
      .catch((error) => {
        console.error("Error adding new product:", error);
      });
  };

  //filter

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="header mb-4 flex items-center">
        <img src="/bamazon-logo.png" alt="Bamazon Logo" className="w-8 h-8" />
        <h1 className="font-bold text-3xl ml-2">Bamazon</h1>
      </div>
      <input
        type="text"
        placeholder="Search products"
        value={searchWord}
        onChange={handleSearch}
        className="search-input w-75 m-4 px-4 py-2 border border-blue-500 rounded-md"
      />
      <ul className="grid grid-cols-3 gap-4 text-neutral">
        {filteredProducts.slice(0, numProductsDisplayed).map((product) => (
          <li key={product.id} className="product-card">
            <div className="p-4 font-bold ">
            <p className="font-semibold">{product.title}</p>
              <p className="text-gray-600">${product.price}</p>
              <img
                src={product.thumbnail}
                alt="picture of product"
                className="w-full h-auto max-h-40 object-contain mt-4"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleOpenModal(product)}
                  className="button-yellow"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="button-green"
                >
                  Add to Cart
                </button>
              </div>
              </div>
          </li>
        ))}
      </ul>
      {filteredProducts.length > numProductsDisplayed && (
        <button
          onClick={handleShowMoreProducts}
          className="m-4 py-2 px-4 bg-blue-500 text-white rounded"
        >
          Show More
        </button>
      )}

      <button
        onClick={handleOpenAddProductModal}
        className="m-4 py-2 px-4 bg-blue-500 text-white rounded"
      >
        Add your own product
      </button>
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={handleCloseAddProductModal}
        onSubmit={handleAddProductSubmit}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductList;
