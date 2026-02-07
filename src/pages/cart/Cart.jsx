import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

export default function Cart() {
  const { cartItems } = useOutletContext();

  // Count total item quantity
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  // Count total items price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <section>
      <h2>Selected items</h2>

      {/* Empty text */}
      {cartItems.length === 0 ? (
        <h3 className={styles.emptyText}>Your cart is empty</h3>
      ) : (
        <>
          {/* Each Item */}
          <div className={styles.grid}>
            {cartItems.map((item) => (
              <div key={item.cartItemId} className={styles.card}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <h4>Line total: ${(item.price * item.qty).toFixed(2)}</h4>
                  <p>Quantity: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount Box */}
          <div className={styles.totalBox}>
            <h2>Order summary:</h2>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <p>Subtotal x ({totalQty} items)</p>
          </div>
        </>
      )}
    </section>
  );
}
