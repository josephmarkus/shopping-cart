"use client";

import { CSSProperties, useReducer } from "react";
import styles from "./page.module.css";

enum ProductAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

type Product = {
  name: string;
  price: string;
  color: string;
  quantity: number;
};

const ALL_PRODUCTS = [
  {
    name: "Milk",
    price: "£1.19",
    color: "#F2F2F2",
    quantity: 0,
  },
  {
    name: "Butter",
    price: "£1.80",
    color: "#D9C484",
    quantity: 0,
  },
  {
    name: "Yoghurt",
    price: "£0.69",
    color: "#F2EFE9",
    quantity: 0,
  },
  {
    name: "Cheese",
    price: "£2.19",
    color: "#F2AE2E",
    quantity: 0,
  },
  {
    name: "Apples",
    price: "£0.90",
    color: "#B80816",
    quantity: 0,
  },
  {
    name: "Oranges",
    price: "£0.95",
    color: "#F25C05",
    quantity: 0,
  },
  {
    name: "Bananas",
    price: "£0.85",
    color: "#F2D22E",
    quantity: 0,
  },
  {
    name: "Celery",
    price: "£0.57",
    color: "#72A603",
    quantity: 0,
  },
  {
    name: "Carrots",
    price: "£0.40",
    color: "#F26A1B",
    quantity: 0,
  },
  {
    name: "Onions",
    price: "£0.55",
    color: "#F2E9BD",
    quantity: 0,
  },
  {
    name: "Tomatoes",
    price: "£0.85",
    color: "#D91604",
    quantity: 0,
  },
  {
    name: "Bread",
    price: "£0.39",
    color: "#D9843B",
    quantity: 0,
  },
  {
    name: "Pasta",
    price: "£0.41",
    color: "#F2C744",
    quantity: 0,
  },
  {
    name: "Chickpeas",
    price: "£0.55",
    color: "#D9965B",
    quantity: 0,
  },
  {
    name: "Rice",
    price: "£0.48",
    color: "#F2EBDC",
    quantity: 0,
  },
  {
    name: "Eggs",
    price: "£1.25",
    color: "#F2F2F2",
    quantity: 0,
  },
  {
    name: "Chicken",
    price: "£2.29",
    color: "#F2BBBB",
    quantity: 0,
  },
  {
    name: "Salmon",
    price: "£2.99",
    color: "#E9A18B",
    quantity: 0,
  },
  {
    name: "Beef",
    price: "£3.39",
    color: "#8C3041",
    quantity: 0,
  },
];

type State = Product[];

type Action = {
  type: ProductAction;
  product: Product;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ProductAction.ADD: {
      const { name } = action.product;
      const itemId = state.findIndex((item) => item.name === name);
      const quantity = state[itemId].quantity as number;

      if (itemId > -1) {
        return [
          ...state.toSpliced(itemId, 1, {
            ...action.product,
            quantity: quantity + 1,
          }),
        ];
      }

      return [...state, action.product];
    }
    case ProductAction.REMOVE: {
      const { name } = action.product;
      const itemId = state.findIndex((item) => item.name === name);
      const quantity = state[itemId].quantity as number;

      if (itemId > -1) {
        return [
          ...state.toSpliced(itemId, 1, {
            ...action.product,
            quantity: quantity - 1,
          }),
        ];
      }

      return [...state, action.product];
    }
  }
};

export default function Home() {
  const [products, dispatch] = useReducer(reducer, ALL_PRODUCTS);
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
