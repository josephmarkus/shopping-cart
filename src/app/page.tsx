"use client";

import { useReducer } from "react";
import styles from "./page.module.css";
import { productReducer } from "./productReducer";
import { ALL_PRODUCTS } from "./products";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";
import { Products } from "./components/Products";

export default function Home() {
  const [products, dispatch] = useReducer(productReducer, ALL_PRODUCTS);

  return (
    <main className={styles.main}>
      <Products items={products} onDispatch={dispatch} />
      <div className={styles.sidebar}>
        <Cart products={products} />
        <Total />
      </div>
    </main>
  );
}
