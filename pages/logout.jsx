import React, { useEffect, useState } from "react";
import { auth, logout } from "../components/fbauth.js";

export default function Logout(req, res) {
	logout();
	res.redirect("/");

	return <h1>Logout</h1>;
}
