import { Link } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      {/* Home Page */}
      {/* Left side */}
      <div className={styles.leftColumn}>
        {/* Title */}
        <h1 className="title">Best watch store</h1>
        {/* Description */}
        <p className="description">Shop the best watches on the internet.</p>
        {/* Shop Now Button */}
        <button className="shop-btn">
          <Link to="shop">Shop now</Link>
        </button>
      </div>

      {/* Right side */}
      <div className="right-side">
        <div>
          <img src="../src/assets/images/watch3.png" />
        </div>
      </div>
    </section>
  );
}
