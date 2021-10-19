import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
     
    createUser(email,password)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Please Register</h3>
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="your email"
          className="box"
        />
        <input
          onBlur={handlePassword}
          type="password"
          placeholder="your password"
          className="box"
        />
        <input type="submit" value="Register" className="btn " />
        <p style={{ marginTop: "1rem", fontSize: "2rem" }}>
          Already Register?
          <span style={{ textDecoration: "underline" }}>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
