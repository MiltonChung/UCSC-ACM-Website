import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity";
import Loading from "../Loading";

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
					<p className="italicize">{eventHourFormatter(start, end)}</p>
					<p className="italicize">
						{location.includes("https://") ? (
							<a href={location} target="_blank" rel="noopener noreferrer">
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

const eventHourFormatter = (start, end) => {
	const options = {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	start = new Date(start);
	end = new Date(end);
	const startString = start.toLocaleString("en-US", options);
	const endString = end.toLocaleString("en-US", options);
	return `${startString} ~ ${endString}`;
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
