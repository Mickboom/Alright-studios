import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users/login", { username, password })
      .then(response => alert("Login Successful!"))
      .catch(error => alert("Login Failed"));
  };

  return (
    <div className="container my-5">
      <h2 className="text-danger">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-danger">Login</button>
      </form>
    </div>
  );
}

export default Login;
