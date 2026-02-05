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
  function addItem(itemId) {
    setCartItems((prev) => {
      [...prev, itemId];
    });
  }

  // Remove item from cart
  function removeItem(itemId) {}

  return (
    <>
      <Header cartItems={cartItems}></Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
