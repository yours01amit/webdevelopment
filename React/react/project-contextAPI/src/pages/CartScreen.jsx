import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItem } = useContext(MyStore);

  const total = cartItem.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  if (cartItem.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">
          Your cart is empty
        </h2>
        <p className="mt-2 text-gray-500">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {cartItem.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
        </div>

        <div className="h-fit rounded-2xl border p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Order Summary
          </h2>

          <div className="mt-5 flex justify-between">
            <span>Total Items</span>
            <span>
              {cartItem.reduce(
                (sum, item) => sum + (item.quantity || 1),
                0
              )}
            </span>
          </div>

          <div className="mt-4 flex justify-between border-t pt-4">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="mt-6 w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;