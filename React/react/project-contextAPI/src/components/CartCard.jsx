
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ product }) => {
  const { cartItem, setCartItem } = useContext(MyStore);

  if (!product) return null;

  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;

  // Increase quantity
  const increaseQty = () => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = () => {
    if (quantity === 1) return;

    setCartItem((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };

  // Remove product
  const removeItem = () => {
    setCartItem((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row">
      {/* Product Image */}
      <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-36">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row">
        <div className="flex-1">
          <h2 className="line-clamp-2 text-base font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-2 text-sm capitalize text-gray-500">
            {product.category}
          </p>

          <p className="mt-3 text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          {/* Quantity Controls */}
          <div className="mt-4 flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
            <button
              onClick={decreaseQty}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="px-4 py-2 text-lg hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>

            <span className="min-w-12 px-3 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={increaseQty}
              aria-label="Increase quantity"
              className="px-4 py-2 text-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Subtotal and Remove */}
        <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-between">
          <p className="font-bold text-gray-900">
            ${subtotal.toFixed(2)}
          </p>

          <button
            onClick={removeItem}
            className="text-sm font-medium text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
