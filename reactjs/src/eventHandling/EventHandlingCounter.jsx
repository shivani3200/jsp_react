import React from "react";

const EventHandlingCounter = () => {
  let count = 0;
  function handleClick() {
    console.log(count);
    count = count + 1;
  }
  return (
    <div>
      <h1 className="text-3xl">{count}</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 m-2 rounded-lg bg-pink-400"
      >
        increment
      </button>
    </div>
  );
};

export default EventHandlingCounter;
