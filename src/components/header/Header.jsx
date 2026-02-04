import NavBar from "../navbar/NavBar";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className={styles.myheader}>
      <NavBar></NavBar>
      <h1 className="logo">
        <Link to="/">wwwatch.com</Link>
      </h1>
      <button>
        <Link to="cart">Cart</Link>
      </button>
    </header>
  );
}
