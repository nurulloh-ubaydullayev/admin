import "./Directions.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Directions() {
  const [directions, setDirections] = useState([]);

  const token = window.localStorage.getItem("auth_token");

  useEffect(async () => {
    const res = await fetch("http://localhost:9000/directions", {
      method: "GET",
      headers: { "Content-Type": "application/json", token: token },
    });

    const data = await res.json();
    setDirections(data);
  }, []);

  console.log(directions);
  return (
    <>
      <ul className="directions">
        {directions.length > 0 &&
          directions.map((row, index) => (
            <li className="direction" key={index}>
              {row.service_name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Directions;
