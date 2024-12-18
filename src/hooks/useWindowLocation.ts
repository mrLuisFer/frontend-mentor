import { useEffect, useState } from "react";

export const useWindowLocation = () => {
	const [location, setLocation] = useState(window.location.pathname);

	useEffect(() => {
		const handleLocationChange = () => {
			setLocation(window.location.pathname);
		};

		window.addEventListener("popstate", handleLocationChange);
		return () => {
			window.removeEventListener("popstate", handleLocationChange);
		};
	}, []);

	return { location, setLocation };
};
