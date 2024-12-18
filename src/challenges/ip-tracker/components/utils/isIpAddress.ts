export const validateIsIpAddress = (ipAddress: string) => {
	const regex = new RegExp(
		"(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}",
	);
	const isValidate = regex.test(ipAddress ?? "");

	return isValidate;
};
