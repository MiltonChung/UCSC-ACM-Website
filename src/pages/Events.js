import React from "react";
// Components
import CalendarComponent from "../components/Events/CalendarComponent";
import BackgroundSVG from "../components/BackgroundSVG";

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
		</div>
	);
};

export default Events;
