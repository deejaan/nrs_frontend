import React, { useState, useEffect } from "react";
import AdminProductList from "./AdminProductList.jsx";
import NavBar from "./NavBar.jsx";
import AdminSideBar from "./AdminSideBar.jsx";
import ProductsService from "./ProductsService.js";

const AdminProductsPage = (props) => {
  const [products, setProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);

  const getProducts = () => {
    const fetchData = async () => {
      const data = await ProductsService.getProducts();
      setProducts(data);
    };
    fetchData();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const removeItemFromList = (newProduct) => {
    const newProducts = products.filter((item) => {
      return item.id !== newProduct.id;
    });
    setProducts(newProducts.concat());
  };

  const addProduct = (name, price) => {
    var product = { name, price };
    setProducts(products.concat(product));
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <AdminProductList
          products={products}
          removeItemFromList={removeItemFromList}
        ></AdminProductList>
        <AdminSideBar addProduct={addProduct}></AdminSideBar>
      </div>
    </div>
  );
};

export default AdminProductsPage;
