import { useCountriesStore } from '../../context/useCountriesStore.ts';
import Country from './Country';

export default function Countries() {
	const { countries } = useCountriesStore();
	return (
		<div className="flex flex-col gap-9 sm:flex-row sm:flex-wrap sm:justify-center md:justify-between md:px-14">
			{countries?.map((country) => <Country country={country} key={country.name} />)}
		</div>
	);
}
