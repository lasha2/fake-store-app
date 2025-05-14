"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <a key={p.id} href={`/product/details/${p.id}`} className={styles.card}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
        </a>
      ))}
    </div>
  );
}
