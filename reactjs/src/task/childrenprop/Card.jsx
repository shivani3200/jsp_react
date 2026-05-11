import React from "react";
import Button from "./Button";

const Card = (props) => {
  const { name, id, description, image } = props;

  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-5 hover:scale-105 transition-all duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 p-1 shadow-md"
      />

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">ID: {id}</p>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="flex gap-4 w-full justify-center">
        <Button color="red">Contact</Button>
        <Button color="blue">Download</Button>
      </div>

    </div>
  );
};

export default Card;