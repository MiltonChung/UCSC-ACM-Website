import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import sanityClient from "../../sanity";
import { eventHourFormatter } from "../../util";

const localizer = momentLocalizer(moment);

function EventAgenda({ event }) {
	return (
		<span className="calendar-agenda">
			<h4>{event.title}</h4>
			<p className="italicize">{event.location}</p>
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
				data.forEach(ev => {
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
				showMultiDayTimes
				step={10}
				timeslots={12}
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
