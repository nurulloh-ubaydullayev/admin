import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./Pages/Login/Login";
import AdminUsers from "./Pages/AdminUsers/AdminUsers";
import AdminOrders from "./Pages/AdminOrders/AdminOrders";
import UserArchives from "./Pages/UserArchives/UserArchives";
import Directions from "./Pages/Directions/Directions";

// Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admins/users" element={<AdminUsers />} />
          <Route path="/admins/users/:userId" element={<UserArchives />} />
          <Route path="/admins/orders" element={<AdminOrders />} />
          <Route path="/admins/directions" element={<Directions />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
