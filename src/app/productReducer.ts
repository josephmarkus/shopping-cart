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
      const inCart = itemId > -1;

      if (!inCart) {
        return [
          ...state,
          {
            ...action.product,
            quantity: 1,
          },
        ];
      }

      const quantity = state[itemId].quantity as number;

      return state.toSpliced(itemId, 1, {
        ...action.product,
        quantity: quantity + 1,
      });
    }

    case ProductAction.REMOVE: {
      const { name } = action.product;
      const itemId = state.findIndex(
        (item) => item.name === name && item.quantity && item.quantity > 0,
      );
      const inCart = itemId > -1;

      if (!inCart) {
        return state;
      }

      return state
        .map((item) => {
          if (item.name != name) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity && item.quantity - 1,
          };
        })
        .filter((item) => item.quantity != 0);
    }
  }
};
