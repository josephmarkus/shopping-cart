import { Product } from "@/app/types";
import styles from "./Cart.module.css";
import { Title } from "../Title";

type CartProps = {
  products: Product[];
};

export const Cart = (props: CartProps) => {
  const { products } = props;

  return (
    <div className={styles.cart}>
      <Title elementType="h2">Cart</Title>
      <ul>
        {products.map(({ quantity, name }) => (
          <li className={styles.cartItem} key={name}>
            {quantity}x {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
