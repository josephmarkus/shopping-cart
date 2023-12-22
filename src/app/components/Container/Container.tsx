import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  const { className, ...otherProps } = props;

  const classes = classNames(styles.container, className);

  return <div className={classes} {...otherProps} />;
};
