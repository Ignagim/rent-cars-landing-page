import React from "react";
import styles from "./Find.module.css";

function Card({ image, make }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${make} car`} />
      <p>{make}</p>
    </div>
  );
}

export default Card;
