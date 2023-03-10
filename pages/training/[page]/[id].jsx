import Link from "next/link";
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

function LoadModule({ page, id }) {
	page = parseInt(page);
	id = parseInt(id);

	if (page === 0) {
		return <DefaultPage />;
	} else if (page === 1 && id === 1) {
		return (
			<>
				<h1>Packing</h1>
				<h2>
					Limits <i>luggage</i>
				</h2>
				<p>
					Space travel has always been a fascinating topic for many people,
					especially in the modern era where human beings are exploring outer
					space more and more. However, packing for a space mission is not an
					easy task. There are many things to consider, including the weight,
					size, and durability of the items. The packing limits for space travel
					are determined by several factors, such as the size of the spacecraft
					and the amount of available storage space.
				</p>

				<p>
					One of the most important things to consider when packing for a space
					mission is weight. The weight of the payload, including all equipment
					and supplies, must be kept to a minimum. This is because the cost of
					launching a spacecraft into orbit increases significantly with the
					weight of the payload. As a result, astronauts and space agencies must
					carefully choose the items they bring on board, prioritizing those
					that are essential for the mission.
				</p>

				<p>
					For safety, each astronaut can only take so much weight. The gross
					weight per capita is <strong>250 lbs</strong> by default and can be
					extended at checkout or by contacting an agent.
				</p>

				<p>
					Another factor to consider is size. The size of the items being packed
					must fit within the available storage space on the spacecraft. This
					means that items such as large equipment, tools, or supplies must be
					compact and lightweight to maximize space efficiency. Additionally,
					items that can be easily disassembled and stored in smaller parts,
					such as bicycles or camping gear, are favored over bulky,
					non-disassemblable items.
				</p>

				<p>
					Each astronaut is allowed <strong>8 cubic foot</strong> of storage.
					However, customers can contact sales for additional storage space.
				</p>

				<p>
					Durability is also an important factor when packing for space travel.
					The harsh conditions of space, such as extreme temperatures, high
					levels of radiation, and micrometeoroids, can cause damage to
					equipment and supplies. As a result, space agencies must use materials
					that are able to withstand these conditions, such as metals like
					aluminum or titanium, and high-strength plastics.
				</p>

				<p>
					In conclusion, packing for space travel requires careful consideration
					of many factors, including weight, size, and durability. The packing
					limits for space travel are determined by the size of the spacecraft
					and the amount of available storage space, and astronauts and space
					agencies must make careful choices about what to bring on board in
					order to maximize efficiency and ensure the success of their mission.
				</p>

				<Link className="button" href="/training/4/1">
					View Sample Lesson 2
				</Link>

				<p style={{ color: "green" }}>Your reading has been recorded.</p>
			</>
		);
	} else if (page === 4 && id === 1) {
		return (
			<>
				<h1>Launch Safety</h1>
				<h2>
					Walk Through <i>transfer_within_a_station</i>
				</h2>
				<p>
					Launch safety is a critical aspect of space travel. The process of
					launching a spacecraft into orbit is complex and involves many factors
					that must be carefully managed to ensure the safety of the astronauts
					and mission success. This includes the design and construction of the
					spacecraft, the selection of launch sites and launch vehicles, and the
					development of operational procedures to ensure the safety of the crew
					during launch and reentry.
				</p>

				<p>
					The design and construction of the spacecraft are critical to ensuring
					launch safety. The spacecraft must be designed to withstand the
					extreme conditions of launch, including high levels of acceleration,
					vibration, and temperature. The spacecraft must also be able to
					protect the crew from the effects of a launch failure, such as loss of
					cabin pressure or fire. The spacecraft must also be equipped with
					systems that can ensure the crew&apos;s survival in the event of an
					emergency, such as parachutes and escape systems.
				</p>

				<p>
					The selection of launch sites and launch vehicles is also important to
					ensure launch safety. Launch sites must be located in areas that are
					free from potential hazards, such as high population density, natural
					disasters, or military activity. The launch vehicle must also be
					selected based on its ability to meet the requirements of the mission,
					including its capacity to carry the payload and its safety record.
				</p>

				<p>
					The development of operational procedures is also critical to ensuring
					launch safety. These procedures must be designed to minimize the risk
					of failure and ensure the safety of the crew during launch and
					reentry. This includes the development of emergency procedures, such
					as the use of escape systems or emergency landing sites, as well as
					the implementation of strict operational protocols, such as pre-launch
					checks and in-flight monitoring.
				</p>

				<p>
					In conclusion, launch safety is a critical aspect of space travel that
					requires careful planning, design, and execution. The design and
					construction of the spacecraft, the selection of launch sites and
					launch vehicles, and the development of operational procedures are all
					important factors in ensuring the safety of astronauts during launch
					and reentry. The space community must continue to invest in research
					and development to improve launch safety and ensure the success of
					future missions.
				</p>

				<Link className="button" href="/training/1/1">
					View Sample Lesson 1
				</Link>

				<p style={{ color: "green" }}>Your reading has been recorded.</p>
			</>
		);
	} else {
		return <AccessDenied />;
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
	const { page, id } = router.query;
	// const [module, setModule] = React.useState(0);

	const { data, error } = useSWR("/api/staticdata", fetcher);

	return (
		<>
			<div className={`${styles.lessonCont} training`}>
				<div className={styles.lessonNav}>
					<ModuleCollapsible data={data} page={page} id={id} />
				</div>
				<div className={styles.lessonBody}>
					{error && <div>Failed to Load.</div>}
					{!data && <div>Loading</div>}
					<LoadModule page={page} id={id} />
				</div>
			</div>
		</>
	);
}
