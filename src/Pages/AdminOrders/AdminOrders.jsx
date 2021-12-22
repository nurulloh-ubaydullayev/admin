import "./AdminOrders.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AdminOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const token = window.localStorage.getItem("auth_token");

  useEffect(async () => {
    const response = await fetch("http://localhost:9000/admins/orders", {
      method: "GET",
      headers: { "Content-Type": "application/json", token: token },
    });

    if (response.status != 200) {
      navigate("/login");
    }

    const data = await response.json();
    setOrders(data);
  }, []);

  async function handleClickBtn(e) {
    const res = await fetch(
      `http://localhost:9000/admins/orders/${e.target.dataset.reqid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", token: token },
      }
    );

    if (res.status != 200) {
      navigate("/login");
    } else if (res.status == 200) {
      const message = await res.json();
      e.target.style.textDecoration = "line-through";
    }
  }

  async function handleDeleteBtn(e) {
    const res = await fetch(
      `http://localhost:9000/admins/orders/${e.target.dataset.reqid}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token: token },
      }
    );

    if (res.status != 200) {
      navigate("/login");
    } else if (res.status == 200) {
      const message = await res.json();
      e.target.style.textDecoration = "green wavy underline";
    }
  }

  return (
    <>
      <div>
        <ul className="orders">
          {orders.length > 0 &&
            orders.map(row => (
              <li className="order" key={row.request_id}>
                <p>{moment(`${row.request_time}`).locale("uz-latn").format("LLL")}</p>
                <p>{row.request_order}</p>
                <p>{row.user_name}</p>
                <p>{row.user_phone}</p>
                <p>{row.is_approved ? "Tasdiqlandi!!!" : "Tasdiqlanmagan"}</p>
                {!row.is_approved ? (
                  <button data-reqid={row.request_id} onClick={handleClickBtn}>
                    Tasdiqlash
                  </button>
                ) : (
                  <button data-reqid={row.request_id} onClick={handleDeleteBtn}>
                    O'chirish
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default AdminOrders;
