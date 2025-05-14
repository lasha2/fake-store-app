"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("https://fakestoreapi.com/users/3");
      setUser(await res.json());
    }
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>; //es sanam ar chavamate, erors agdebda saxelis cakitxvisas

  return (
    <div className={styles.profile}>
      <h1>
        {user.name.firstname} {user.name.lastname}
      </h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}
