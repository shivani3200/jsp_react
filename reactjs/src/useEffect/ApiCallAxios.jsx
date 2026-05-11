import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
const ApiCallAxios = () => {
  const [user, setUser] = useState([]);

  //resolve promise -> asyn (func) and await(promise)
  const getApi = async () => {
    const { data } = await axios.get("https://api.github.com/users");
    setUser(data); //passing and storing data in state
  };

  //fetching data feom server ,[] ->execute once

  useEffect(() => {
    try {
      getApi();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>image</th>
            <th>login</th>
          </tr>
        </thead>
        <tbody>
          {user.map((val) => {
            return (
              <Fragment key={val.id}>
                <tr>
                  <td>{val.id}</td>
                  <td>
                    <img src={val.avatar_url} height="200px" weight="200px" />
                  </td>
                  <td>{val.login}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ApiCallAxios;
