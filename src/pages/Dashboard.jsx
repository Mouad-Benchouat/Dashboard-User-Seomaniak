import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import logo from "../assets/logo.png";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const addUser    = (user) => setUsers((prev) => [...prev, user]);
  const deleteUser = (i)    => setUsers((prev) => prev.filter((_, j) => j !== i));

  return (
    <div className="page">
      <div className="header">
        <img src={logo} alt="Seomaniak" className="logo" />
        <h1>Dashboard Utilisateurs Seomaniak</h1>
      </div>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}
