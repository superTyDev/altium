import React, { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
	// set the days, hours, minutes and seconds to date
	const [months, setMonths] = useState(0);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	// calculate the time left until the target date
	const calculateTimeLeft = () => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	// set the time left to the state
	useEffect(() => {
		const timer = setTimeout(() => {
			const timeLeft = calculateTimeLeft();

			setDays(timeLeft.days);
			setHours(timeLeft.hours);
			setMinutes(timeLeft.minutes);
			setSeconds(timeLeft.seconds);
		}, 1000);

		// clear timeout if the component is unmounted
		return () => clearTimeout(timer);
	});

	return [days, hours, minutes, seconds];
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	return (
		<>
			{days} Days : {hours} Hours : {minutes} Mins : {seconds} Secs
		</>
	);
};

export default CountdownTimer;
