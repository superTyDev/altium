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

	const { data, error } = useSWR("/api/staticdata", fetcher);

	return (
		<>
			<div className={`${styles.lessonCont} training`}>
				<div className={styles.lessonNav}>
					<ModuleCollapsible data={data} />
				</div>
				<div className={styles.lessonBody}>
					{error && <div>Failed to Load.</div>}
					{!data && <div>Loading</div>}
				</div>
			</div>
		</>
	);
}
