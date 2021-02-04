export default {
	name: "events",
	title: "Events",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "allDay",
			title: "All Day?",
			type: "boolean",
		},
		{
			name: "start",
			title: "Start Time",
			type: "datetime",
		},
		{
			name: "end",
			title: "End Time",
			type: "datetime",
		},
		{
			name: "location",
			title: "Location",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
	],
};
