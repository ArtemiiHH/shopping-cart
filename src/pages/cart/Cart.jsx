import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

export default function Cart() {
  const { cartItems } = useOutletContext();

  return (
    <section>
      <h2>Selected items</h2>

      <div className={styles.grid}>
        {/* Show empty text */}
        {cartItems.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <h4>${item.price.toFixed(2)}</h4>
                <p>Quantity: {cartItems.length}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
