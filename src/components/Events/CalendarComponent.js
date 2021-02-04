import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../sanity";

const localizer = momentLocalizer(moment);
const now = new Date();
const myEventsList = [
	{
		id: 0,
		title: "html + css party",
		allDay: false,
		start: new Date(2021, 1, 17, 17),
		end: new Date(2021, 1, 17, 18),
		location: "Jack Baskin Building 2",
		desc: "Come learn how to code your own website! Snacks and drinks provided.",
	},
	{
		id: 1,
		title: "react native playbooks",
		start: now,
		end: now,
		allDay: true,
		location: "College 10",
		desc: "This is a place for students to play around with React!",
	},
	{
		id: 2,
		title: "DTS STARTS",
		start: new Date(2021, 2, 13),
		end: new Date(2021, 2, 16),
		location: "Your home!",
		desc: "Big conference for important people",
	},
];

function EventAgenda({ event }) {
	return (
		<span className="calendar-agenda">
			<h4>{event.title}</h4>
			<p>{event.description}</p>
		</span>
	);
}

function Event({ event }) {
	return (
		<span className="calendar-month">
			<h4>{event.title}:</h4>
			<p className="italicize">{eventHourFormatter(event.start, event.end)}</p>
			<p className="italicize">{event.location}</p>
			<p>{event.description}</p>
		</span>
	);
}

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

const ColoredDateCellWrapper = ({ children }) =>
	React.cloneElement(React.Children.only(children), {
		style: {
			backgroundColor: "rgba(255, 255, 255, 0.5)",
		},
	});

const CalendarComponent = () => {
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
				data.map(ev => {
					ev.start = new Date(ev.start);
					ev.end = new Date(ev.end);
				});
				return setEventsList(data);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="calendar">
			<Calendar
				localizer={localizer}
				events={eventsList}
				startAccessor="start"
				endAccessor="end"
				views={["month", "week", "agenda"]}
				defaultView="month"
				step={120}
				showMultiDayTimes
				style={{ height: 800 }}
				components={{
					event: Event,
					agenda: {
						event: EventAgenda,
					},
					timeSlotWrapper: ColoredDateCellWrapper,
					dateCellWrapper: ColoredDateCellWrapper,
				}}
			/>
		</div>
	);
};

export default CalendarComponent;
