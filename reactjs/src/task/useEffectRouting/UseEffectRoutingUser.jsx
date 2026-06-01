import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UseEffectRoutingUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setData(data);
      console.log(data)
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
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))] gap-6 p-4">
  {data.map((user) => (
    <div
      key={user.id}
      className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
        {user.name.firstname[0].toUpperCase()}
      </div>

      <div className="text-center mt-4">
        <h2 className="text-lg font-bold">
          {user.name.firstname} {user.name.lastname}
        </h2>
        <p className="text-gray-500">@{user.username}</p>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          <span className="font-semibold">📧 Email:</span>{" "}
          {user.email}
        </p>

        <p>
          <span className="font-semibold">📱 Phone:</span>{" "}
          {user.phone}
        </p>

        <p>
          <span className="font-semibold">🏙️ City:</span>{" "}
          {user.address.city}
        </p>

        <p>
          <span className="font-semibold">📮 Zip:</span>{" "}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default UseEffectRoutingUser;
