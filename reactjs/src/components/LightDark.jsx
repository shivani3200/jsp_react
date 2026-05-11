import React, { useState } from "react";

const LightDark = () => {
  const [light, setLight] = useState("true");

  function handletoggle() {
    setLight(!light);
  }

  return (
    <div
      className={`${light ? "bg-white text black" : "bg-black text white"} h-screen flex justify-center text-center  `}
    >
      <div className={`h-screen `}>
        <div>{light ? " Light mode" : "dark Mode"}</div>
        <button
          onClick={handletoggle}
          className={`${light ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {light ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default LightDark;
