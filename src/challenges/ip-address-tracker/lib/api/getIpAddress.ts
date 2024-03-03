const apiKey = 'at_vHT9FPrB92PiJRn09kgUcHOVcTaVD';
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
import axios from 'axios';
import { Location } from '../../types/Location';

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
