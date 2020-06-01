import React from "react";
import "./Order.css";

const User = (props) => {
  var userId;
  return (
    <ul>
      <li className="border">{props.id}</li>
      <li className="border">{props.name}</li>
      <li className="border">{props.lastName}</li>
      <li className="border">{props.email}</li>
      <li className="border">{props.adress}</li>
      <li className="border">{props.username}</li>
      <li className="border">{props.password}</li>
      <li className="border">{props.role}</li>
      <span
        className="close"
        onClick={() => {
          userId = props.id;
          props.mediatorRemoveUserFromList.removeUserFromList(userId);
        }}
      >
        x
      </span>
    </ul>
  );
};

export default User;