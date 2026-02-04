import styles from "./Content.module.css";
import { Outlet } from "react-router";

export default function Content({ children }) {
  return <section className={styles.mycontent}>{children}</section>;
}
