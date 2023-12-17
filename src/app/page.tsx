"use client";

import { CSSProperties, useState } from "react";
import styles from "./page.module.css";

const ALL_PRODUCTS = [
  {
    name: "Milk",
    price: "£1.19",
    color: "#F2F2F2",
  },
  {
    name: "Butter",
    price: "£1.80",
    color: "#D9C484",
  },
  {
    name: "Yoghurt",
    price: "£0.69",
    color: "#F2EFE9",
  },
  {
    name: "Cheese",
    price: "£2.19",
    color: "#F2AE2E",
  },
  {
    name: "Apples",
    price: "£0.90",
    color: "#B80816",
  },
  {
    name: "Oranges",
    price: "£0.95",
    color: "#F25C05",
  },
  {
    name: "Bananas",
    price: "£0.85",
    color: "#F2D22E",
  },
  {
    name: "Celery",
    price: "£0.57",
    color: "#72A603",
  },
  {
    name: "Carrots",
    price: "£0.40",
    color: "#F26A1B",
  },
  {
    name: "Onions",
    price: "£0.55",
    color: "#F2E9BD",
  },
  {
    name: "Tomatoes",
    price: "£0.85",
    color: "#D91604",
  },
  {
    name: "Bread",
    price: "£0.39",
    color: "#D9843B",
  },
  {
    name: "Pasta",
    price: "£0.41",
    color: "#F2C744",
  },
  {
    name: "Chickpeas",
    price: "£0.55",
    color: "#D9965B",
  },
  {
    name: "Rice",
    price: "£0.48",
    color: "#F2EBDC",
  },
  {
    name: "Eggs",
    price: "£1.25",
    color: "#F2F2F2",
  },
  {
    name: "Chicken",
    price: "£2.29",
    color: "#F2BBBB",
  },
  {
    name: "Salmon",
    price: "£2.99",
    color: "#E9A18B",
  },
  {
    name: "Beef",
    price: "£3.39",
    color: "#8C3041",
  },
];

export default function Home() {
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [cart, setCart] = useState<Array<Record<string, string | number>>>([]);

  const handleAdd = (name: string, price: string) => {
    const itemId = cart.findIndex((item) => item.name === name);
    const quantity = cart[itemId]?.quantity || 1;

    if (itemId > -1) {
      const newCart = cart.toSpliced(itemId, 1, {
        name,
        price,
        quantity: (quantity as number) + 1,
      });
      setCart(newCart);
      return;
    }

    setCart([...cart, { name, price, quantity }]);
  };

  const handleRemove = (name: string) => {
    setCart(cart.filter((product) => product.name !== name));
  };

  return (
    <main className={styles.main}>
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Products</h1>
        <ul className={styles.productList}>
          {ALL_PRODUCTS.map(({ name, price, color }) => (
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
                  onClick={() => handleAdd(name, price)}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className={styles.remove}
                  onClick={() => handleRemove(name)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
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
