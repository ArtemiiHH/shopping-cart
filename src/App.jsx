// Imports
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";

// Import components
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  // Cart items list
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  function addItem(product, qty = 1) {
    setCartItems((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          qty: updated[index].qty + qty,
        };

        return updated;
      }

      return [...prev, { ...product, qty }];
    });
  }

  // Remove item from cart
  function removeItem(itemId) {}

  return (
    <>
      <Header cartItems={cartItems}></Header>
      <Content>
        <Outlet context={{ addItem, cartItems }} />
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
