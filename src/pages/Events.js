import React from "react";
// Components
import CalendarComponent from "../components/Events/CalendarComponent";
import BackgroundSVG from "../components/BackgroundSVG";
import UpcomingEvents from "../components/Events/UpcomingEvents";

const Events = () => {
	return (
		<div className="events">
			<BackgroundSVG />
			<div className="events-calendar">
				<h3>
					don’t miss out! stay <span className="font-blue">updated</span> here
				</h3>
				<CalendarComponent />
			</div>
			<div className="events-upcoming">
				<h3>
					<span className="font-blue">upcoming</span> events
				</h3>
				<UpcomingEvents />
			</div>
		</div>
	);
};

export default Events;
