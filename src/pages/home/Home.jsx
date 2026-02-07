import { Link } from "react-router";
import styles from "./Home.module.css";
import watchImage from "../../assets/images/watch.png";

export default function Home() {
  return (
    <section className={styles.home}>
      {/* Left side */}
      <div className={styles.leftColumn}>
        <p className={styles.kicker}>Premium watches</p>

        <h1 className={styles.title}>Best watch store</h1>

        <p className={styles.description}>
          Shop the best watches on the internet. Clean design, great prices,
          fast delivery.
        </p>

        <div className={styles.actions}>
          <Link className={styles.shopBtn} to="shop">
            Shop now
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className={styles.rightColumn}>
        <div className={styles.imageBox}>
          <img className={styles.heroImage} src={watchImage} alt="Watch" />
        </div>
      </div>
    </section>
  );
}
