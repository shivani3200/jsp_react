import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(
      "use effect with dependency array, runs on initial render as well as ehrnever count changes, it can have multiple dependency and runs whenever any one of them changes",
    );
  }, [count]);

  useEffect(() => {
    console.log(
      "use effect with empty dependency array, euns on initial render",
    );
  }, []);

  useEffect(() => {
    console.log("use effect with no dependency array, runs on every render");
  });

  return (
    <>
      <h1>UseEffect</h1>
      <h2>count:{count}</h2>
      <button onClick={handleClick}>count+</button>
    </>
  );
};

export default UseEffect;
