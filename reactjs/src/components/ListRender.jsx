import React from "react";
import Card from "./Card";

const ListRender = () => {
    
let list1 = ["a", "b", "c", "d", "e", "f"];
let list2 = [
  { name: "shiv", age: 23 },
  { name: "kumar", age: 23 },
];


let list3 = [
  { name: "shiv", age: 23, favSub:"hindi" },
  { name: "kumar", age: 23, favSub:"english" },
  { name: "simmy", age: 13 ,favSub:"maths"},
  { name: "shergill", age: 53 ,favSub:"history"},
  { name: "jimmy", age: 43 ,favSub:"GK"},
];

  return (
    <div>
      {/* <h2>list1</h2>
      {list1.map((ele, index) => {
        <h3 key={index}>{ele}</h3>;
      })} */}


{/* list 2 */}

      <h2>list2</h2>
      {list2.map((ele, index) => {
        return(
            <>
            <p>{ele.name}</p>
            <>{ele.age}</>
            </>
        )
      })}

      {/* list3 */}
    </div>
  );
};

export default ListRender;
