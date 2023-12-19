import { formatPrice } from "@/app/utils";
import { Title } from "../Title";
import styles from "./Total.module.css";

type TotalProps = {
  amount: number;
};

export const Total = (props: TotalProps) => {
  const { amount } = props;
  const amountFormatted = formatPrice(amount);

  return (
    <div className={styles.total}>
      <Title elementType="h2">Total</Title>
      <p>{amountFormatted}</p>
    </div>
  );
};
