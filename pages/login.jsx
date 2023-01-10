import React, { useEffect, useState } from "react";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../components/fbauth.js";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from '../styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) setLocation("/dashboard");
  }, [user, loading]);
  return (
    <>
      <div className="navSpacer"></div>

      <div className={styles.login}>
        <div className={styles.login__container}>
          <h1>Login</h1>
          <div className={styles.input__container}>
            <i className="fa fa-envelope"></i>
            <input
              type="text"
              className={styles.login__textBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className={styles.input__container}>
            <i className="fa fa-key"></i>
            <input
              type="password"
              className={styles.login__textBox}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className={styles.login__btn}
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className={[styles.login__btn, styles.login__google]}
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <div>
            <a to="/reset">Forgot Password</a>
          </div>
          <div>
            Don't have an account? <a to="/register">Register</a> now.
          </div>
          <div>Note: Login with google is blocked on PCSP computers</div>
        </div>
      </div>
    </>
  );
}
