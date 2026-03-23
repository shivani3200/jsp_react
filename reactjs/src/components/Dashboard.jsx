import React from "react";
import Profile from "./Profile";

const Dashboard = ({ userList }) => {
  return (
    <div className="flex flex-col h-full text-center">
      <div className="text-3xl text-blue-800 font-bold mb-3">Dashboard</div>

      <div className="flex-1">
        <Profile userList={userList} />
      </div>
    </div>
  );
};

export default Dashboard;
