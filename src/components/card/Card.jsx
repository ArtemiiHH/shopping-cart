import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ image, title, price }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="watch" className={styles.image} />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <div className={styles.counter}>
        <button>-</button>
        <h3>1</h3>
        <button>+</button>
      </div>
    </div>
  );
}
