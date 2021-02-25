import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity";
import Loading from "../Loading";
import { eventHourFormatter } from "../../util";

const IndividualEvent = ({ eventName, start, end, description, location }) => {
	return (
		<article className="window-card">
			<div className="window-card-top-menu">
				<div className="red-circle"></div>
				<div className="yellow-circle"></div>
				<div className="green-circle"></div>
			</div>
			<div className="window-card-texts">
				<h3 className="window-card-texts-title">{eventName}</h3>
				<div className="window-card-texts-body">
					<p className="italicize">{dateFormatter(start)}</p>
					<p className="italicize">from {eventHourFormatter(start, end)}</p>
					<p className="italicize">
						{location.includes("https://") ? (
							<a key={Math.random()} href={location} target="_blank" rel="noopener noreferrer">
								{location}
							</a>
						) : (
							location
						)}
					</p>
					<p>{description}</p>
				</div>
			</div>
		</article>
	);
};

const dateFormatter = start => {
	const numToDay = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	};
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	start = new Date(start);
	const date = start.getDate();
	const dayOfWeek = numToDay[start.getDay()];
	const month = monthNames[start.getMonth()];
	return `${dayOfWeek}, ${month} ${date}`;
};

const UpcomingEvents = () => {
	const [eventsList, setEventsList] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "events"] {
				title,
				allday,
				start,
				end,
				location,
				description,
			}`
			)
			.then(data => {
				data.forEach(ev => {
					ev.start = new Date(ev.start);
					ev.end = new Date(ev.end);
				});
				return setEventsList(data);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="events-upcoming-windows">
			{eventsList.length === 0 ? (
				<Loading />
			) : (
				eventsList.map(e => {
					return (
						<IndividualEvent
							key={Math.random()}
							eventName={e.title}
							start={e.start}
							end={e.end}
							location={e.location}
							description={e.description}
						/>
					);
				})
			)}
		</div>
	);
};

export default UpcomingEvents;
