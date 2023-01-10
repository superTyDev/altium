import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { auth } from "./../components/fbauth.js";
import { useAuthState } from "react-firebase-hooks/auth";

/**
 * The dashboard function pulls tickets
 * Made on 9/26/22
 */

import "./../styles/dashboard.css";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (!user) setLocation("/login");
  }, [user]);

  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
