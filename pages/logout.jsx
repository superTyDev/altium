import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import { logout } from "../components/fbauth.js";

export default function Logout(req, res) {
	logout();
	const router = useRouter()

	useEffect(() => {
		router.push("/");
	}, [router]);


	return <h1>Logout</h1>;
}
