import { ReactNode, memo } from "react";
import styles from "./Title.module.css";

type TitleProps = {
  elementType: "h1" | "h2";
  children: ReactNode;
};

export const Title = memo((props: TitleProps) => {
  const { elementType: ElementType, children } = props;

  return <ElementType className={styles.title}>{children}</ElementType>;
});

Title.displayName = "Title";
