import React from "react";

const ProductCard = ({ product, data }) => {
  console.log("data >>> ", data);
  return (
    <div className="relative w-64 h-80 overflow-hidden border rounded-lg shadow-lg group">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold">{product.name}</h3>
          <p className="text-teal-400 text-xl font-bold">{product.price}</p>

          <button className="mt-4 border border-white text-white py-2 px-3 hover:bg-white hover:text-black">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
