import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ product, addItem }) {
  const [count, setCount] = useState(1);

  const totalPrice = product.price * count;

  // Increment count
  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  // Decrement count
  function decrementCount() {
    setCount((prev) => Math.max(1, prev - 1));
  }

  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <h3>{product.title}</h3>
      <h4>${totalPrice.toFixed(2)}</h4>

      <div className={styles.counter}>
        <button onClick={decrementCount}>-</button>
        <h3>{count}</h3>
        <button onClick={incrementCount}>+</button>
      </div>

      <button
        onClick={() => addItem(product, count)}
        className={styles.addCartBtn}
      >
        Add to cart
      </button>
    </div>
  );
}
