import NavBar from "../navbar/NavBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.myheader}>
      <NavBar></NavBar>
      <h1>Logo</h1>
      <button>Cart</button>
    </header>
  );
}
