import { api } from "../api.js";
import { sanitizeText } from "../../../../utils/sanitizeText.ts";
import { useMemo } from "react";
import Header from "../components/Header/index.js";
import { IoIosArrowRoundBack } from "react-icons/io";
import CountryLabel from "../components/CountryLabel.js";
import { useNumberFormat } from "../hooks/useNumberFormat.js";
import { AllRoutes } from "@/enums/AllRoutes.ts";
import { useWindowLocation } from "@/hooks/useWindowLocation.ts";

export default function DetailView() {
	const { location } = useWindowLocation();
	const countryParam = location.split("/")[2];
	const country = useMemo(() => {
		return api?.find(({ name }) => {
			const countryName = sanitizeText(name);
			return countryName.includes(countryParam) || countryName === countryParam;
		});
	}, [countryParam]);
	const population = useNumberFormat(country?.population ?? 0);
	const currencies = country?.currencies?.map((currency) => currency.name).join(", ") ?? "";
	const languages = country?.languages?.map((language) => language.name).join(", ") ?? "";

	return (
		<div>
			<Header />
			<div className="min-h-screen bg-[var(--rest-very-light-gray)] px-4 py-7 lg:px-14 dark:bg-[var(--rest-very-dark-value)]">
				<a
					href={AllRoutes.restCountries}
					className="flex w-fit transform items-center justify-center gap-1 rounded-md bg-[var(--rest-white)] px-5 py-1 shadow-md transition active:scale-95 dark:bg-[var(--rest-dark-blue)] dark:text-[var(--rest-white)]"
				>
					<IoIosArrowRoundBack size="25px" />
					<span className="text-sm">Back</span>
				</a>
				<div className="flex flex-col gap-7 pt-16 sm:flex-row sm:items-start sm:justify-center md:justify-between xl:justify-around dark:text-[var(--rest-white)]">
					<img
						src={country?.flag}
						alt={country?.name}
						className="rounded-sm shadow-lg transition hover:shadow-xl sm:max-w-96 md:max-w-80 lg:w-[500px] lg:max-w-full xl:w-2/5"
					/>
					<div className="flex flex-col">
						<h2 className="mb-6 text-xl font-bold sm:text-2xl">{country?.name}</h2>
						<div className="flex flex-col gap-7 sm:flex-row sm:justify-between sm:gap-0">
							<div className="flex flex-col gap-2 text-sm">
								<CountryLabel label="Native Name" value={country?.nativeName} />
								<CountryLabel label="Population" value={population} />
								<CountryLabel label="Region" value={country?.region} />
								<CountryLabel label="Sub Region" value={country?.subregion} />
								<CountryLabel label="Capital" value={country?.capital} />
							</div>
							<div className="flex flex-col gap-2 text-sm">
								<CountryLabel label="Top Level Domain" value={country?.topLevelDomain} />
								<CountryLabel label="Currencies" value={currencies} />
								<CountryLabel label="Languages" value={languages} />
							</div>
						</div>
						{country?.borders ? (
							<div className="mt-8 gap-3 sm:flex">
								<h2 className="mb-3 font-bold sm:mb-0 sm:text-sm">Border Countries:</h2>
								<div className="flex flex-wrap gap-4 sm:gap-2">
									{country?.borders.map((border) => (
										<div
											key={border}
											className="rounded bg-[var(--rest-white)] px-6 py-1 text-sm shadow-sm transition hover:shadow-md sm:text-sm dark:bg-[var(--rest-dark-blue)] dark:shadow-lg dark:hover:shadow-xl"
										>
											{border}
										</div>
									))}
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
