import styles from "./Content.module.css";
import Home from "../../pages/Home";

export default function Content() {
  return (
    <section className={styles.mycontent}>
      <Home></Home>
    </section>
  );
}
