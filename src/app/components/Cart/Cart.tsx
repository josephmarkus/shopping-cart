import { Product } from "@/app/types";
import styles from "./Cart.module.css";
import { Title } from "../Title";
import { formatPrice, sanitisePrice } from "@/app/utils";
import { Container } from "../Container";

type CartProps = {
  products: Product[];
};

export const Cart = (props: CartProps) => {
  const { products } = props;

  return (
    <Container className={styles.cart}>
      <Title elementType="h2">Cart</Title>
      <ul>
        {products.map(({ quantity, name, price }) => {
          const productPrice = formatPrice(sanitisePrice(price) * quantity);

          return (
            <li className={styles.cartItem} key={name}>
              {quantity}x {name} ({productPrice})
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
