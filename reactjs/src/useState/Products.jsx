import React, { useState } from "react";

const Products = ({productListArray}) => {
//   let data = [
//     {
//       id: 1,
//       name: "shirt",
//       price: 2000,
//       available: true,
//       quantity: 1,
//     },
//     {
//       id: 1,
//       name: "jeans",
//       price: 3000,
//       available: true,
//       quantity: 1,
//     },
//     {
//       id: 1,
//       name: "kurti",
//       price: 2000,
//       available: false,
//       quantity: 1,
//     },
//     {
//       id: 1,
//       name: "jutti",
//       price: 2000,
//       available: false,
//       quantity: 1,
//     },
//   ];

  const [products, setProducts] = useState(productListArray);

  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id} className="flex flex-row ">
            <div className="h-80 w-60 shadow-lg rounded-l-2xl p-5 flex flex-col">
              <h3 className="text-3xl font-bold ">{item.name}</h3>
              <p className="text-sm text-gray-500 ">Price : {item.price}</p>
              <p className="text-sm text-black">Quantity : {item.qty}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
