import { ReactNode } from "react";
import styles from "./Title.module.css";

type TitleProps = {
  elementType: "h1" | "h2";
  children: ReactNode;
};

export const Title = (props: TitleProps) => {
  const { elementType: ElementType, children } = props;

  return <ElementType className={styles.title}>{children}</ElementType>;
};
