"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function CartPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      const cartRes = await fetch("https://fakestoreapi.com/carts/1");
      const cart = await cartRes.json();

      const loaded = [];

      for (const p of cart.products) {
        const r = await fetch(
          `https://fakestoreapi.com/products/${p.productId}`
        );
        const prod = await r.json();
        prod.quantity = p.quantity;
        loaded.push(prod);
      }

      setItems(loaded);
    }
    fetchCart();
  }, []);

  const updateQty = (idx, delta) => {
    const newItems = items.slice();
    let q = newItems[idx].quantity + delta;
    if (q < 1) q = 1;
    if (q > 10) q = 10;
    newItems[idx].quantity = q;
    setItems(newItems);
  };

  return (
    <div className={styles.cart}>
      {items.map((it, i) => (
        <div key={it.id} className={styles.row}>
          <img src={it.image} alt={it.title} />
          <div className={styles.info}>
            <h3>{it.title}</h3>
            <div className={styles.qty}>
              <button onClick={() => updateQty(i, -1)}>-</button>
              <span>{it.quantity}</span>
              <button onClick={() => updateQty(i, 1)}>+</button>
            </div>
          </div>
          <div className={styles.price}>
            ${(it.price * it.quantity).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}
