"use client";

import { Reducer, useReducer } from "react";
import styles from "./page.module.css";
import { productReducer } from "./productReducer";
import { ALL_PRODUCTS } from "./data";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";
import { Products } from "./components/Products";
import { sanitisePrice } from "./utils";

export default function Home() {
  const [state, dispatch] = useReducer(productReducer, {
    products: ALL_PRODUCTS,
    cart: [],
  });
  const total = state.cart.reduce((total, { price, quantity }) => {
    const productPrice = sanitisePrice(price);
    return productPrice * quantity + total;
  }, 0);

  return (
    <main className={styles.main}>
      <Products items={state.products} onDispatch={dispatch} />
      <div className={styles.sidebar}>
        <Cart products={state.cart} />
        <Total amount={total} />
      </div>
    </main>
  );
}
