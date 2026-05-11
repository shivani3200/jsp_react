import React, { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    gender: "",
    degree: "",
  });
  const { userName, userEmail, gender, degree } = formData; //state destructuring

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>controlled Form</h1>
        </div>
        <div>
          <label htmlFor="uname">user name</label>
          <input
            type="text"
            id="uname"
            name="userName"
            value={userName}
            onChange={handleChange}
          />

          <label htmlFor="uemail">user email</label>
          <input
            type="text"
            id="uemail"
            value={userEmail}
            name="userEmail"
            onChange={handleChange}
          />

          <div value={gender} onChange={handleChange}>
            <label htmlFor="">Gender : </label>
            <input type="radio" name="gender" value="male" />
            male
            <input type="radio" name="gender" value="female" />
            female
            <input type="radio" name="gender" value="other" />
            other
          </div>
          <div>
            <label htmlFor="">Degree : </label>
            <select name="degree" id="degree" value={degree} onChange={handleChange}>
                <option value="" disabled>--select--</option>
                <option value="b.tech">B.Tech</option>
                <option value="mba">MBA</option>
                <option value="bsc">BSC</option>
                <option value="b.a">B.A</option>
            </select>
          </div>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default ControlledForm2;
