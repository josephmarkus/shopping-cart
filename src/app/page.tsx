"use client";

import { CSSProperties, useReducer } from "react";
import styles from "./page.module.css";
import { productReducer } from "./productReducer";
import { ALL_PRODUCTS } from "./products";
import { ProductAction } from "./types";

export default function Home() {
  const [products, dispatch] = useReducer(productReducer, ALL_PRODUCTS);
  const cart = products.filter((product) => product.quantity > 0);

  return (
    <main className={styles.main}>
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Products</h1>
        <ul className={styles.productList}>
          {products.map((product) => {
            const { color, name, price, quantity } = product;
            const isDisabled = quantity === 0;

            return (
              <li
                className={styles.product}
                key={name}
                style={{ "--product-color": color } as CSSProperties}
              >
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.add}
                    onClick={() =>
                      dispatch({ type: ProductAction.ADD, product })
                    }
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() =>
                      dispatch({ type: ProductAction.REMOVE, product })
                    }
                    disabled={isDisabled}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.cart}>
          <h2 className={styles.title}>Cart</h2>
          <ul className={styles.cartList}>
            {cart.map(({ quantity, name }) => (
              <li className={styles.cartItem} key={name}>
                {quantity}x {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.total}>
          <h2 className={styles.title}>Total</h2>
        </div>
      </div>
    </main>
  );
}
