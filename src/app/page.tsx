"use client";

import { useReducer } from "react";
import styles from "./page.module.css";
import { productReducer } from "./productReducer";
import { ALL_PRODUCTS } from "./data";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";
import { Products } from "./components/Products";
import { sanitisePrice } from "./utils";

export default function Home() {
  const [state, dispatch] = useReducer(productReducer, []);
  const total = state.reduce((total, item) => {
    const productPrice = sanitisePrice(item.price);
    return productPrice * (item.quantity || 0) + total;
  }, 0);

  return (
    <main className={styles.main}>
      <Products items={ALL_PRODUCTS} onDispatch={dispatch} />
      <div className={styles.sidebar}>
        <Cart products={state} />
        <Total amount={total} />
      </div>
    </main>
  );
}
