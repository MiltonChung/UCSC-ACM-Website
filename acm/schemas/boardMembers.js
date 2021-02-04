export default {
	name: "boardMember",
	title: "Board Member",
	type: "document",
	fields: [
		{
			name: "orderID",
			title: "Order",
			type: "number",
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "position",
			title: "Position",
			type: "string",
		},
		{
			name: "profilePic",
			title: "Profile Picture",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "blurb",
			title: "Blurb",
			type: "blockContent",
		},
	],
};
