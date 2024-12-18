import type { Country as CountryType } from "../../../types/Api.js";
import CountryLabel from "../../CountryLabel.js";
import { useNumberFormat } from "../../../hooks/useNumberFormat.js";
import { AllRoutes } from "@/enums/AllRoutes";
import { sanitizeText } from "@/utils/sanitizeText.js";

export default function Country({ country }: { country: CountryType }) {
	const sanitizedName = sanitizeText(country.name);
	const countryPopulation = useNumberFormat(country.population);

	return (
		<a href={`${AllRoutes.restCountries}/${sanitizedName}`}>
			<div className="mx-auto w-72 rounded-lg shadow-md transition hover:shadow-lg dark:border dark:border-transparent dark:hover:border-[var(--rest-very-dark-blue)]">
				<img
					src={country.flag}
					alt={`${country.name} flag`}
					title={`${country.name} flag`}
					className="rounded-t-md border border-gray-100 dark:border-[var(--rest-dark-blue)]"
				/>
				<div className="flex flex-col gap-2 rounded-b-lg border border-gray-50 bg-[var(--rest-white)] p-6 transition dark:border-[var(--rest-dark-blue)] dark:bg-[var(--rest-dark-blue)] dark:text-[var(--rest-white)]">
					<h3 className="text-lg font-bold">{country.name}</h3>
					<div>
						<CountryLabel label="Population" value={countryPopulation} />
						<CountryLabel label="Region" value={country.region} />
						<CountryLabel label="Capital" value={country.capital} />
					</div>
				</div>
			</div>
		</a>
	);
}
