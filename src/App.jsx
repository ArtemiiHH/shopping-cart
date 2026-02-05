// Import styles
import "./App.css";

// Import Outlet
import { Outlet } from "react-router";

// Import components
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  // Cart items list
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart 
  function addItem(itemId) {}

  // Remove item from cart
  function removeItem(itemId) {}

  return (
    <>
      <Header></Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
