import React, { useState, useEffect } from "react";
import UsersList from "../UsersList.jsx";
import NavBar from "../NavBar.jsx";
import UserSideBar from "../UserSideBar.jsx";
import ProductsService from "../ProductsService.js";

const AdminUserPage = (props) => {

  var [users, setUsers] = useState([]);

  const removeUserFromList = (userId) => {
    const newUsers = users.filter((item) => {
      return item.id !== userId;
    });
    setUsers(newUsers.concat());
  };

  const getUsers = () => {

    const fetchData = async () => {
      console.log(ProductsService.getUsers());

      const data = await ProductsService.getUsers();
      setUsers(data);
      console.log(data);

    };
    fetchData();
  };

  useEffect(() => {
    getUsers();
  }, []);



  return (
    <div>
      <NavBar></NavBar>
      <div className="lista">
        <UsersList
          users={users}
          removeUserFromList={removeUserFromList}
        ></UsersList>
      </div>
      <UserSideBar></UserSideBar>
    </div>
  );
};
export default AdminUserPage;
