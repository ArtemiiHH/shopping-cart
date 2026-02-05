import NavBar from "../navbar/NavBar";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header({ cartItems }) {
  return (
    <header className={styles.header}>
      <NavBar></NavBar>
      <h1 className={styles.logo}>
        <Link to="/">wwwatch.com</Link>
      </h1>
      <ul>
        <li>
          <Link to="cart">
            {cartItems.length === 0 ? "Cart" : `Cart (${cartItems.length})`}
          </Link>
        </li>
      </ul>
    </header>
  );
}
