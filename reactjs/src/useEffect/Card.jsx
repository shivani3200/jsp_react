import React from "react";

const Card = ({ product }) => {
  return (
    <div className=" border rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      <div className="mt-4">
        <h2 className="font-semibold">{product.title}</h2>
        <p>₹ {product.price}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default Card;