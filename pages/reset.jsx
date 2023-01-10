import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "wouter";

import { auth, sendPasswordReset } from "./../components/fbauth.js";
import "./../styles/login.css";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (loading) return;
    if (user) setLocation("/dashboard");
  }, [user, loading]);
  return (
    <>
      <div className="navSpacer"></div>
      <div className="login">
        <div className="login__container">
          <h1>Reset</h1>
          <div className="input__container">
            <i className="fa fa-user"></i>
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <button
            className="login__btn"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset email
          </button>
          <div>
            Don't have an account? <a to="/register">Register</a> now.
          </div>
        </div>
      </div>
    </>
  );
}
