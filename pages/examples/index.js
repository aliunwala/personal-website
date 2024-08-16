import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Examples() {
  return (
    <div className={styles.examplesContainer}>
      <Link href="/fetchExample">fetchExample</Link>
      <br></br>
      <br></br>

      <Link href="/hookExample">hookExample</Link>
      <br></br>
      <br></br>

      <Link href="/formExample">formExample</Link>
    </div>
  );
}
