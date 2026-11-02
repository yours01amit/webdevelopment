import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCards = ({ product }) => {
  const { setCartItem, setIsCartOpen } = useContext(MyStore);

  if (!product) return null;

  const addToCart = () => {
    setCartItem((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const formattedCategory = product.category
    ? product.category.charAt(0).toUpperCase() + product.category.slice(1)
    : "Product";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-56 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          {formattedCategory}
        </span>

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-md bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
            ★ {product.rating?.rate ?? "New"}
          </span>

          {product.rating && (
            <span className="text-xs text-gray-500">
              ({product.rating.count} reviews)
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-gray-800 transition-colors group-hover:text-indigo-600">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-5 mt-5">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>

          <button
            onClick={addToCart}
            className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
