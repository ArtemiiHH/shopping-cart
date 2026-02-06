import NavBar from "../navbar/NavBar";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header({ cartItems }) {
  // Count total items
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    // Header
    <header className={styles.header}>
      {/* Navigation Bar */}
      <NavBar></NavBar>

      {/* Logo */}
      <h1 className={styles.logo}>
        <Link to="/">wwwatch.com</Link>
      </h1>

      {/* Cart Link */}
      <ul>
        <li>
          <Link to="cart">
            {cartItems.length === 0 ? "Cart" : `Cart (${totalQty})`}
          </Link>
        </li>
      </ul>
    </header>
  );
}
