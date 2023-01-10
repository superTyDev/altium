import React, { useEffect, useState } from "react";

import { auth, logout } from "../components/fbauth.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Logout() {
  const [location, setLocation] = useLocation();
  
  useEffect(() => {
    logout();
    setLocation("/");
  });
  return <h1>Logout</h1>;
}
