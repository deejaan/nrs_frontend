import React, { useState, useEffect } from "react";
import ProductList from "../ProductList.jsx";
import SideBar from "../SideBar.jsx";
import ProductsService from "../ProductsService.js";
import NavBar from "../NavBar.jsx";
import AuthService from "../auth.service";

const ProductsPage = (props) => {
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

  const onAddProduct = (newProduct) => {
    var found = false;
    for (let i = 0; i < orderedProducts.length; i++) {
      if (newProduct.id === orderedProducts[i].product.id) {
        orderedProducts[i].quantity += 1;
        found = true;
        break;
      }
    }

    setOrderedProducts(orderedProducts.concat());

    if (!found) {
      setOrderedProducts(
        orderedProducts.concat({ product: newProduct, quantity: 1 })
      );
    }
  };

  const removeItemFromList = (newProduct) => {
    var found;
    for (let i = 0; i < orderedProducts.length; i++) {
      if (newProduct.id === orderedProducts[i].product.id)
        found = orderedProducts[i];
    }
    if (found.quantity - 1 === 0) {
      const newOrderedItems = orderedProducts.filter((item) => {
        return item.product.id !== newProduct.id;
      });
      setOrderedProducts(newOrderedItems);
    } else {
      found.quantity -= 1;
      setOrderedProducts(orderedProducts.concat());
    }
  };

  const logout = () => {
    AuthService.logout();
    props.history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <NavBar logout={logout}></NavBar>
      <div>
        <ProductList
          onAddProduct={onAddProduct}
          products={products}
        ></ProductList>
        <SideBar
          removeItemFromList={removeItemFromList}
          orderedProducts={orderedProducts}
        ></SideBar>
      </div>
    </div>
  );
};

export default ProductsPage;
