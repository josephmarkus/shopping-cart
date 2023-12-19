import styles from "./Products.module.css";
import { Title } from "../Title";
import { CSSProperties } from "react";
import { Product, ProductAction } from "@/app/types";

type ProductsProps = {
  items: Product[];
  onDispatch: ({
    type,
    product,
  }: {
    type: ProductAction;
    product: Product;
  }) => void;
};

export const Products = (props: ProductsProps) => {
  const { items, onDispatch } = props;

  return (
    <div className={styles.container}>
      <Title elementType="h1">Products</Title>
      <ul className={styles.list}>
        {items.map((product) => {
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
                    onDispatch({ type: ProductAction.ADD, product })
                  }
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className={styles.remove}
                  onClick={() =>
                    onDispatch({ type: ProductAction.REMOVE, product })
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
  );
};
