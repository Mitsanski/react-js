export const fromIsoDate = (isoDate) => {
	const date = new Date(isoDate);
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = date.toLocaleString("en-US", options);

	return formattedDate;
};

export const fromIsoDateDay = (isoDate) => {
	const date = new Date(isoDate);
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = date.toLocaleString("en-US", options);

	return formattedDate;
};
