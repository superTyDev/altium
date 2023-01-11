import React, { useEffect } from "react";
import { auth, logout } from "../components/fbauth.js";
import { useRouter } from 'next/router'

export default function Logout(req, res) {
	logout();
	const router = useRouter()

	useEffect(() => {
		router.push("/");
	}, [router]);


	return <h1>Logout</h1>;
}
