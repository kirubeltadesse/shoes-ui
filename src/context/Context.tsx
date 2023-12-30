import React from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker"; // FIXME: Remove this import this is just for testing
import { useReducer } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext<any>({});

faker.seed(99); // getting can't destructure property state of (0, _context_context__WEBPACK_IMPORTED_MODULE_1__.CartState(...)' as it is null

function Context({ children }: { children: React.ReactNode }) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.number({ min: 1, max: 5 }),
  }));

  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return React.useContext(Cart);
};

// TODO: https://www.youtube.com/watch?v=HptuMAUaNGk&ab_channel=RoadsideCoder
// stopped at 35:00 minutes
// use the context into the components
