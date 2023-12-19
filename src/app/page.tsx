"use client";

import { useReducer } from "react";
import styles from "./page.module.css";
import { productReducer } from "./productReducer";
import { ALL_PRODUCTS } from "./data";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";
import { Products } from "./components/Products";

export default function Home() {
  const [products, dispatch] = useReducer(productReducer, ALL_PRODUCTS);
  const cart = products.filter((product) => product.quantity > 0);

  return (
    <main className={styles.main}>
      <Products items={products} onDispatch={dispatch} />
      <div className={styles.sidebar}>
        <Cart products={cart} />
        <Total />
      </div>
    </main>
  );
}
