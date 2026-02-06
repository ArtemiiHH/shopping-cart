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
          <h3 className={styles.emptyText}>Your cart is empty</h3>
        ) : (
          // Each card
          cartItems.map((item) => (
            <>
              <div key={item.cardItemId} className={styles.card}>
                {/* Item Image */}
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  {/* Item title */}
                  <h3>{item.title}</h3>
                  {/* Item price */}
                  <h4>Total price: ${item.price * item.qty}</h4>
                  {/* Item quantity */}
                  <p>Quantity: {item.qty}</p>
                </div>
              </div>
              <div className={styles.totalBox}>
                {/* Order summary */}
                <h2>Order summary:</h2>
                {/* Total price */}
                <h3>{`Total: $${item.price * item.qty}`}</h3>
                {/* Subtotal */}
                <p>{`Subtotal x (${item.qty} items)`}</p>
              </div>
            </>
          ))
        )}
      </div>
    </section>
  );
}
