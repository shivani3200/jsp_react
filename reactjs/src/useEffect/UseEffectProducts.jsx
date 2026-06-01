import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEffectProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
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
    fetchAPI();
  }, []);

  return (
    <>
      {loading ? <h1 className="text-3xl">Loading...</h1> : null}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(12rem,1fr))] gap-6 p-4">
        {" "}
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default UseEffectProducts;
