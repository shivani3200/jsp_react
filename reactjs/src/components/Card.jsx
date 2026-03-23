import React from "react";

const Card = () => {
  let list3 = [
    { name: "shiv", age: 23, favSub: "hindi" },
    { name: "kumar", age: 23, favSub: "english" },
    { name: "simmy", age: 13, favSub: "maths" },
    { name: "shergill", age: 53, favSub: "history" },
    { name: "jimmy", age: 43, favSub: "GK" },
  ];

  return (
    <div style={{ width: "200px", height: "300px", background: "light-gray" }}>
      {list3.map((ele, index) => {
        return (
          <>
            <p>{ele.name}</p>
            <>{ele.age}</>
          </>
        );
      })}
    </div>
  );
};

export default Card;
