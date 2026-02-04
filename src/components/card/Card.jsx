import styles from "./Card.module.css";

export default function Card({ image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="watch" className={styles.image} />
    </div>
  );
}
