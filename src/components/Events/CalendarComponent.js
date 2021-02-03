import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

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
		desc: "Big conference for important people",
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
		<span>
			<em style={{ color: "magenta" }}>{event.title}</em>
			<p>{event.desc}</p>
		</span>
	);
}

function Event({ event }) {
	return (
		<span>
			<strong>{event.title}:</strong>
			<p className="italicize">
				{event.start.getHours()} - {event.end.getHours()}
			</p>
			<p className="italicize">{event.location}</p>
			<p>{event.desc}</p>
		</span>
	);
}

const ColoredDateCellWrapper = ({ children }) =>
	React.cloneElement(React.Children.only(children), {
		style: {
			backgroundColor: "white",
		},
	});

const CalendarComponent = () => {
	return (
		<div className="calendar">
			<Calendar
				localizer={localizer}
				events={myEventsList}
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
				}}
			/>
		</div>
	);
};

export default CalendarComponent;
