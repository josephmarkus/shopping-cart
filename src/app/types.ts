export type Product = {
  name: string;
  price: string;
  color: string;
  quantity?: number;
};

export enum ProductAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
}
