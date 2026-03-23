import React from "react";
import Image2 from "./Image2";
import download from "../images/download.jpg";
import flower4 from "../images/download.jpg";

const CarsList = () => {
  let d1 = { name: "shivani", imgUrl: { download }, hobby: "music" };
  let d2 = { name: "shergill", imgUrl: { flower4 }, hobby: "acting" };
  let d3 = { name: "katrina", imgUrl: { download }, hobby: "reading" };
  let d4 = { name: "srk", imgUrl: { flower4 }, hobby: "music" };
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3">
          <Image2 detail={d1} />
          <Image2 detail={d2} />
          <Image2 detail={d3} />
          <Image2 detail={d4} />
        </div>
      </div>
    </div>
  );
};

export default CarsList;
