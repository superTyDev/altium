import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "/styles/Training.module.css";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function collapse() {
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

function ModuleCollapsible({ data }) {
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

function onPageLoad() {
	collapse();
}

export default function Page() {
	useEffect(() => {
		onPageLoad();
	}, [ModuleCollapsible]);

	const router = useRouter();
	const { page } = router.query;
	// const [module, setModule] = React.useState(0);

	const { data, error } = useSWR("/api/staticdata", fetcher);

	return (
		<>
			<div className={`${styles.lessonCont} training`}>
				<div className={styles.lessonNav}>
					<ModuleCollapsible data={data} onMount={collapse} />
				</div>
				<div className={styles.lessonBody}>
					{error && <div>Failed to Load.</div>}
					{!data && <div>Loading</div>}
					{parseInt(page) === 0 && (
						<>
							<h1>Training</h1>
							<p>
								Get easy access to training material. Our two week course
								provides you with all the information you&apos;ll need to safely
								travel to space.
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
					)}
					{parseInt(page) === 1 && (
						<>
							<h1>Training</h1>
							<p>
								Get easy access to training material. Our two week course
								provides you with all the information you&apos;ll need to safely
								travel to space.
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
					)}
					{parseInt(page) > 1 && (
						<>
							<h1>Access Denied</h1>
							<p>
								Please sign up to view the rest of the training material.
								<br />
								If you are signed up, please login. If you have any questions,
								please reach out.
							</p>
							<div className="buttonCont">
								<Link className="button" href="/training/1">
									View Sample Lesson
								</Link>
								<Link className="button" href="/quote">
									Buy a Ticket
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
