import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "b4khrup9",
	dataset: "production",
	useCdn: true,
});
