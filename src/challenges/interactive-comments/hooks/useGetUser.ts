import jsonData from "../data.js";

export const useGetUser = () => {
	const user = jsonData.currentUser;

	return {
		user,
	};
};
