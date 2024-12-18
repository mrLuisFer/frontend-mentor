const apiKey = import.meta.env.IP_KEY ?? "";
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
import axios from "axios";
import type { Location } from "../../types/Location.js";

export const getIpAddress = async (ipValue: string) => {
	const { data, status }: { data: Location; status: number } = await axios.get(
		`${apiUrl}&ipAddress=${ipValue}`
	);
	if (status !== 200) return { data: {} as Location, status: 400 };
	return {
		data,
		status,
	};
};
