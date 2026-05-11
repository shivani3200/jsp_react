import React from "react";
import User from "./User";
import { NavLink } from "react-router-dom";
import Settings from "./Settings";

const Profile = ({ userList }) => {
  return (
    <div className="text-left border border-blue-500 rounded-lg shadow-lg h-full p-3">
      <div className="text-2xl font-serif">Profile overview</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* {userList?.map((item, i) => (
          <User key={i} user={item} />
        ))} */}
        hi
      </div>
      <div>
        <NavLink to="settings" element={<Settings />} />
      </div>
    </div>
  );
};

export default Profile;
