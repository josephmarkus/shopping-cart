import { Product, ProductAction } from "./types";

type State = {
  products: Product[];
  cart: Product[];
};

type Action = {
  type: ProductAction;
  product: Product;
};

export const productReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ProductAction.ADD: {
      const { name } = action.product;
      const itemId = state.products.findIndex((item) => item.name === name);
      const itemExists = itemId > -1;
      const quantity = state.products[itemId].quantity as number;

      if (itemExists) {
        const updatedProducts = state.products.toSpliced(itemId, 1, {
          ...action.product,
          quantity: quantity + 1,
        });
        // TODO: ensure insertion order
        const updatedCart = updatedProducts.filter(
          (product) => product.quantity > 0,
        );

        return {
          products: updatedProducts,
          cart: updatedCart,
        };
      }

      return state;
    }
    case ProductAction.REMOVE: {
      const { name } = action.product;
      const itemId = state.products.findIndex((item) => item.name === name);
      const itemExists = itemId > -1;
      const quantity = state.products[itemId].quantity as number;

      if (itemExists) {
        const updatedProducts = state.products.toSpliced(itemId, 1, {
          ...action.product,
          quantity: quantity - 1,
        });
        // TODO: ensure insertion order
        const updatedCart = updatedProducts.filter(
          (product) => product.quantity > 0,
        );

        return {
          products: updatedProducts,
          cart: updatedCart,
        };
      }

      return state;
    }
  }
};
