import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by{" "}
        <Link to={"https://github.com/ArtemiiHH"} target="_blanc">
          Barashkov Artemii
        </Link>
      </p>
    </footer>
  );
}
