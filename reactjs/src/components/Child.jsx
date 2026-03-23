import React, { useState } from "react";

const Child = ({handleGetData}) => {
  const [city, setCity] = useState("shivani");

  function handleSendData() {
    handleGetData(city);
  }
  return <div>
    <button onClick={handleSendData}>send</button>
  </div>;
};

export default Child;
