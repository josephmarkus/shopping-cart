import { Product, ProductAction } from "./types";

type State = Product[];

type Action = {
  type: ProductAction;
  product: Product;
};

export const productReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ProductAction.ADD: {
      const { name } = action.product;
      const itemId = state.findIndex((item) => item.name === name);
      const quantity = state[itemId].quantity as number;

      if (itemId > -1) {
        return state.toSpliced(itemId, 1, {
          ...action.product,
          quantity: quantity + 1,
        });
      }

      return [...state, action.product];
    }
    case ProductAction.REMOVE: {
      const { name } = action.product;
      const itemId = state.findIndex((item) => item.name === name);
      const quantity = state[itemId].quantity as number;

      if (itemId > -1) {
        return state.toSpliced(itemId, 1, {
          ...action.product,
          quantity: quantity - 1,
        });
      }

      return [...state, action.product];
    }
  }
};
