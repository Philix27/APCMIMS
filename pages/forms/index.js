import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Landing } from "../../comps/global/Landing";
import styles from "../../styles/form/_formsPage.module.scss";

export default function Home() {
  return (
    <div className={styles.formsPage}>
      <Landing
        title="Electronic Registration"
        imgUrl="images/blackhand.jpg"
        subtitle="JUSTICE, PEACE & UNITY"
        opacity={0.45}
      />

      <div className={styles.gridContainer}>
        <Link href="forms/expression">
          <div className={styles.card}>
            <img src="/images/dark.jpg" />
            <h4>Expression of interest</h4>
            <p>Parameters and articles</p>
          </div>
        </Link>
        <Link href="forms/nomination">
          <div className={styles.card}>
            <img src="/images/dark.jpg" />
            <h4>Normination Form</h4>
            <p>Parameters and articles</p>
          </div>
        </Link>
        <div className={styles.card}>
          <img src="/images/dark.jpg" />
          <h4>Normination Form</h4>
          <p>Parameters and articles</p>
        </div>
      </div>
    </div>
  );
}
