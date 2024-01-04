import styles from "./Products.module.css";
import { Title } from "../Title";
import { CSSProperties, memo } from "react";
import { Product, ProductAction } from "@/app/types";
import { Container } from "../Container";

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

export const Products = memo((props: ProductsProps) => {
  const { items, onDispatch } = props;

  return (
    <Container>
      <Title elementType="h1">Products</Title>
      <ul className={styles.list}>
        {items.map((product) => {
          const { color, name, price } = product;

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
                  className={styles.button}
                  onClick={() =>
                    onDispatch({ type: ProductAction.ADD, product })
                  }
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() =>
                    onDispatch({ type: ProductAction.REMOVE, product })
                  }
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
});

Products.displayName = "Products";
