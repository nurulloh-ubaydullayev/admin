import "./AdminUsers.css";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const token = window.localStorage.getItem("auth_token");

  useEffect(async () => {
    const res = await fetch("http://localhost:9000/admins/users", {
      method: "GET",
      headers: { "Content-Type": "application/json", token: token },
    });

    if (res.status != 200) {
      navigate("/login");
    }

    const data = await res.json();
    setUsers(data);
  }, []);

  console.log(users);

  return (
    <>
      <div className="admin">
        <div className="container">
          <ul className="admin__users">
            {users.length > 0 &&
              users.map((row, index) => (
                <li key={index} className="admin__users-item">
                  <NavLink to={`/admins/users/${row.user_id}`}>
                    <p>
                      <span>User name:</span> {row.user_name}
                    </p>
                    <p>
                      <span>User Login:</span> {row.user_login}
                    </p>
                    <p>
                      <span>User Pasword:</span> {row.user_password}
                    </p>
                    <p>
                      <span>User Phone:</span> {row.user_phone}
                    </p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
