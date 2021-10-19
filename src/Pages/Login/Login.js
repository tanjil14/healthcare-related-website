import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/service";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUsingGoogle, logInWithEmailPassword, error,setUser,setIsLoading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    logInWithEmailPassword(email, password);
    console.log("Hi");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      setUser(result.user);
      console.log(result.user);
      history.push(redirect_url);
    })
    .finally(() => setIsLoading(false));;
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Please Login</h3>
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="your email"
          class="box"
        />
        <input
          onBlur={handlePassword}
          type="password"
          placeholder="your password"
          class="box"
        />
        {error && (
          <p style={{ color: "red", fontSize: "1.5rem" }}>
            user name or password is incorrect!please try again.
          </p>
        )}
        <input type="submit" value="login" class="btn" />
        <input
          onClick={handleGoogleSignIn}
          type="button"
          value="login with google"
          class="btn"
        />
        <p style={{ marginTop: "1rem", fontSize: "2rem" }}>
          Didn't register?
          <span style={{ textDecoration: "underline" }}>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
