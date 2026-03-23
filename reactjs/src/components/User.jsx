import React from "react";

const User = ({ user }) => {
  return (
    <div className="flex justify-center mt-10 shadow-md">
      <div className="bg-white shadow-lg rounded-xl w-52 p-6 text-center">
        <img
          src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`}
          alt="user"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />

        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>age:{user.age}</p>
        <p className="text-gray-600">Hobby: {user.hobby}</p>
      </div>
    </div>
  );
};

export default User;
