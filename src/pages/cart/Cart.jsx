import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

export default function Cart() {
  const { cartItems } = useOutletContext();

  return (
    <section>
      <h2>Selected items</h2>
      <div className={styles.grid}>
        {/* Show empty text */}
        {cartItems.length === 0 ? <h3>Your cart is empty</h3> : <div></div>}
        {cartItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
