import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ product, addItem }) {
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(product.price);

  // Increment count
  function increaseCount() {
    // Original item price
    const originalPrice = product.price;
    // Increment count
    setCount((prev) => prev + 1);
    setItemPrice(originalPrice + itemPrice);
  }

  // Decrement count
  function decreaseCount() {
    // Original item price
    const originalPrice = product.price;
    if (count > 1) {
      // Decrement count
      setCount((prev) => prev - 1);
      // If item price is lower than original, keep original price
      if (itemPrice > originalPrice) {
        setItemPrice(itemPrice - originalPrice);
      } else {
        return originalPrice;
      }
    }
  }

  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <h4>${product.price.toFixed(2)}</h4>

      <div className={styles.counter}>
        <button onClick={decreaseCount}>-</button>
        <h3>{count}</h3>
        <button onClick={increaseCount}>+</button>
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
