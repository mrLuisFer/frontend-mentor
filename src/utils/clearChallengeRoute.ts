export const clearChallengeRoute = (route: string) => {
	if (!route.startsWith("/challenge/") || route.length === 0) {
		return "";
	}
	return route.substring("/challenge/".length);
};
