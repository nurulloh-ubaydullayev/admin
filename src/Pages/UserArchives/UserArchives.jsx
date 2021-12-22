import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

function UserArchives() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [archives, setArchives] = useState([]);
  const token = window.localStorage.getItem("auth_token");

  useEffect(async () => {
    const res = await fetch(`http://localhost:9000/admins/users/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", token: token },
    });

    if (res.status != 200) {
      navigate("/login");
    }

    const data = await res.json();
    setArchives(data);
  }, []);

  console.log(archives);
  return (
    <>
      <div>
        <ul>
          {archives.length > 0 &&
            archives.map((row, index) => (
              <li key={index}>
                <p>{row.user_name}</p>
                <p>{row.user_phone}</p>
                <p>{moment(`${row.request_time}`).format("LLL")}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default UserArchives;
