import { Link } from "react-router";

export default function Home() {
  return (
    <section className="main-section">
      <div className="left-side">
        <h1 className="title">Best watch store</h1>
        <p className="description">Shop the best watches on the internet.</p>
        <button className="shop-btn">
          <Link to="shop">Shop now</Link>
        </button>
      </div>

      <div className="right-side">
        <img src="../src/assets/images/watch.jpg" />
      </div>
    </section>
  );
}
