export const eventHourFormatter = (start, end) => {
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
