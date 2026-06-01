import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UseEffectRoutingProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {loading ? <h1 className="text-3xl">Loading...</h1> : null}
      {error && <p className="text-red-500">Error: {error}</p>}

<NavLink
  to="/"
  className="bg-yellow-300 text-black px-4 py-1 m-6 rounded-lg inline-block"
>
  Home
</NavLink>
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(13rem,1fr))] gap-6 p-4">
        {" "}
        {data.map((product) => {
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
        })}
      </div>
    </>
  );
};

export default UseEffectRoutingProducts;
