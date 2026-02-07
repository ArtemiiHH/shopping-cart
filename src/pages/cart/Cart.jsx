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

  // Calculate VAT 20%
  const vat = totalPrice * 0.2;

  // Total price with VAT
  const totalWithVAT = totalPrice + vat;

  return (
    <section>
      <h2 className={styles.title}>Selected items</h2>

      {/* Empty text */}
      {cartItems.length === 0 ? (
        <h3 className={styles.emptyText}>Your cart is empty</h3>
      ) : (
        <>
          {/* Items + Summary layout */}
          <div className={styles.grid}>
            {/* Left column: items */}
            <div className={styles.items}>
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

            {/* Right column: order summary */}
            <div className={styles.totalBox}>
              <h2>Order summary:</h2>

              <p>
                Subtotal x{" "}
                {totalQty === 1 ? `${totalQty} item` : `${totalQty} items`}
              </p>

              <p>+VAT 20% (${vat.toFixed(2)})</p>

              <hr />

              <h3>Total: ${totalWithVAT.toFixed(2)}</h3>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
