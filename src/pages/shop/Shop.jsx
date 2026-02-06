import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [watches, setWatches] = useState([]);
  const { addItem } = useOutletContext();

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=watch")
      .then((response) => response.json())
      .then((data) => setWatches(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={styles.shop}>
      <h2 className={styles.title}>Items</h2>
      <div className={styles.grid}>
        {watches.map((watch) => (
          <div key={watch.id}>
            <Card product={watch} addItem={addItem}></Card>
          </div>
        ))}
      </div>
    </section>
  );
}
