import React from "react";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Singleprod = ({ prod, key }: any) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div key={key} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={prod.image}
          alt={prod.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        {/* <div>
          <h3 className="text-sm text-gray-700">
            <a href={prod.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {prod.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{prod.color}</p>
        </div> */}

        <div className="flex">
          <p className="text-sm font-medium text-gray-900">{prod.price}</p>
        </div>
        <div className="flex">
          {/* add rating */}
          <Rating
            rating={prod.rating}
            onClick={function (i: number): void {
              throw new Error("Function not implemented.");
            }}
            style={undefined}
          />
        </div>
        <div className="flex">
          {/* Remove from cart */}
          {cart.some((p: any) => p.id === prod.id) ? (
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }
            >
              <span className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700">
                Remove
              </span>
            </button>
          ) : (
            <button
              type="button"
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              <span className="sr-only">Add to cart</span>
              {prod.inStock ? (
                <span className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                  Add to cart
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-300 hover:bg-red-700">
                  Out of Stack
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Singleprod;
