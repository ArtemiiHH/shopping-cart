import styles from "./Content.module.css";

export default function Content({ children }) {
  return <section className={styles.mycontent}>{children}</section>;
}
