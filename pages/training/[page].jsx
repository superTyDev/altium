import { useRouter } from "next/router";
import React, { useEffect } from "react";

import {
	AccessDenied,
	collapse,
	DefaultPage,
	fetcher,
	ModuleCollapsible,
} from "/pages/training";
import styles from "/styles/Training.module.css";

import useSWR from "swr";

function onPageLoad() {
	collapse();
}

export default function Page() {
	useEffect(() => {
		onPageLoad();
	}, []);

	const router = useRouter();
	const { page } = router.query;

	const { data, error } = useSWR("/api/lessondata", fetcher);

	return (
		<>
			<div className={`${styles.lessonCont} training`}>
				<div className={styles.lessonNav}>
					<ModuleCollapsible data={data} onMount={collapse} />
				</div>
				<div className={styles.lessonBody}>
					{error && <div>Failed to Load.</div>}
					{!data && <div>Loading</div>}
					{parseInt(page) === 0 && <DefaultPage />}
					{parseInt(page) === 1 && <DefaultPage />}
					{parseInt(page) > 1 && <AccessDenied />}
				</div>
			</div>
		</>
	);
}
