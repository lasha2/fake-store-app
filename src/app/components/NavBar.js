"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
         <li>
          <Link href="/RegisterForm">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
