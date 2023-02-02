import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "/styles/Training.module.css";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function collapse() {
	var coll = document.getElementsByClassName("collapsible");
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
		const tempData = JSON.parse(data);
		var collapsible = [];
		console.log(tempData);
		console.log(`modules: ${tempData.modules}`);
		Object.keys(tempData.modules).forEach((key, index) => {
			const lesson = tempData.modules[key];
			collapsible.push(
				<>
					<button type="button" className="collapsible">
						{index}: {lesson.name}
					</button>
					<div className="collapCont">
						<ul>
							<li>{lesson.subTopics}</li>
						</ul>
					</div>
				</>
			);
		});
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
	}, []);

	const router = useRouter();
	const { page } = router.query;
	// const [module, setModule] = React.useState(0);

	const { data, error } = useSWR("/api/staticdata", fetcher);

	return (
		<>
			{page}
			<div className={`${styles.lessonCont} training`}>
				<div className={styles.lessonNav}>
					<ModuleCollapsible data={data} />
				</div>
				<div className={styles.lessonBody}>
					{error && <div>Failed to Load.</div>}
					{!data && <div>Loading</div>}
					{page === 0 && (
						<>
							<h1>Training</h1>
							<p>
								Get easy access to training material. Our two week course
								provides you with all the information you&apos;ll need to safely
								travel to space.
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
