import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.mynavbar}>
      <ul>
        <li>Home</li>
        <li>Store</li>
      </ul>
    </nav>
  );
}
