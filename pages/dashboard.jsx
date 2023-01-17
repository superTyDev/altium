import { useRouter } from 'next/router';
import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";

import "../styles/Dashboard.module.css";

/**
 * The dashboard function pulls tickets
 * Made on 9/26/22
 */

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
