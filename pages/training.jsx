import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import styles from "/styles/Training.module.css";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export function collapse() {
	var coll = document.getElementsByClassName("collapsible");
	console.log(coll);
	if (coll) {
		for (var i = 0; i < coll.length; i++) {
			coll[i].onclick = function () {
				this?.classList.toggle("active");
				var content = this?.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			};
		}
	}
}

export function ModuleCollapsible({ data }) {
	if (data) {
		var collapsible = [];

		const tempData = JSON.parse(data);
		Object.keys(tempData.modules).forEach((key, index) => {
			const lesson = tempData.modules[key];
			const subTopics = lesson.subTopics;

			// console.log(lesson.subTopics);
			collapsible.push(
				<div key={index}>
					<button
						type="button"
						className={"collapsible"}
						href={`/training/${index + 1}`}
					>
						{index + 1}: {lesson.name}
					</button>
					<div className={`collapCont ${styles.collapCont}`}>
						<ul>
							{lesson.subTopics.map((subTopic, subIndex) => (
								<li key={(index + 1) * (subIndex + 1)}>
									<Link href={`/training/${index + 1}/${subIndex + 1}`}>
										{subTopic}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			);
		});
		return (
			<>
				{collapsible}
				{collapse()}
			</>
		);
	} else {
		return <p>No Module</p>;
	}
}

export const DefaultPage = () => {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1>Training</h1>
				<p>
					Get easy access to training material. Our two week course provides you
					with all the information you&apos;ll need to safely travel to space.
				</p>
				<div className="buttonCont">
					<Link className="button" href="/training/1/1">
						View Sample Lesson 1
					</Link>
					<Link className="button" href="/training/4/1">
						View Sample Lesson 2
					</Link>
					<Link className="button" href="/quote">
						Buy a Ticket
					</Link>
				</div>
			</div>
		</>
	);
};

export const AccessDenied = () => {
	return (
		<>
			<h1>Access Denied</h1>
			<p>
				Please sign up to view the rest of the training material.
				<br />
				If you are signed up, please login. If you have any questions, please
				<Link href="/contact">reach out</Link>.
			</p>
			<div className="buttonCont">
				<Link className="button" href="/training/1/1">
					View Sample Lesson 1
				</Link>
				<Link className="button" href="/training/4/1">
					View Sample Lesson 2
				</Link>
				<Link className="button" href="/quote">
					Buy a Ticket
				</Link>
			</div>
		</>
	);
};

export default function Training() {
	const router = useRouter();

	useEffect(() => {
		router.push("/training/0");
	}, [router]);

	return <DefaultPage />;
}
