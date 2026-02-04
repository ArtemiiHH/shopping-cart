import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ image, title, price }) {
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);

  // Increment count
  function increaseCount() {
    const originalPrice = price;
    setCount((prev) => prev + 1);
    setItemPrice(originalPrice + itemPrice);
  }

  // Decrement count
  function decreaseCount() {
    const originalPrice = price;
    if (count > 0) {
      setCount((prev) => prev - 1);
      setItemPrice(itemPrice - originalPrice);
    }
  }

  return (
    <div className={styles.card}>
      <img src={image} alt="watch" className={styles.image} />
      <h3>{title}</h3>
      <h4>${itemPrice.toFixed(2)}</h4>
      <div className={styles.counter}>
        <button onClick={decreaseCount}>-</button>
        <h3>{count}</h3>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}
