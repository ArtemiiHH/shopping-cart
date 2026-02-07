import NavBar from "../navbar/NavBar";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header({ cartItems }) {
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <NavBar />
      </div>

      <h1 className={styles.logo}>
        <Link to="/">WWWATCH</Link>
      </h1>

      <div className={styles.right}>
        <Link className={styles.cartLink} to="cart">
          {cartItems.length === 0 ? "Cart" : `Cart (${totalQty})`}
        </Link>
      </div>
    </header>
  );
}
