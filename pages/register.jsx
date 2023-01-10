import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./../components/fbauth.js";

import "../styles/Login.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [location, setLocation] = useLocation();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) setLocation("/dashboard");
  }, [user, loading]);

  return (
    <>
      <div className="navSpacer"></div>

      <div className="login">
        <div className="login__container">
          <h1>Register</h1>
          <div className="input__container">
            <i className="fa fa-user"></i>
            <input
              type="text"
              className="login__textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="input__container">
            <i className="fa fa-envelope"></i>
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="input__container">
            <i className="fa fa-key"></i>
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="login__btn" onClick={register}>
            Register
          </button>
          <button
            className="login__btn login__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div>
            Already have an account? <a to="/">Login</a> now.
          </div>
          <div>Note: Login with google is blocked on PCSP computers</div>
        </div>
      </div>
    </>
  );
}
