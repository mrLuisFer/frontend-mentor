import { useEffect } from "react";
import Countries from "./components/Countries/index.js";
import Header from "./components/Header/index.js";
import RegionFilter from "./components/RegionFilter/index.js";
import Searchbox from "./components/Searchbox/index.js";
import { api } from "./api.js";
import { useCountriesStore } from "./context/useCountriesStore.js";

export default function RestCountriesApi() {
	const { setCountries } = useCountriesStore();

	useEffect(() => {
		setCountries(api);
	}, [setCountries]);

	return (
		<section>
			<Header />
			<main className="min-h-screen bg-[var(--rest-very-light-gray)] px-4 py-7 md:px-0 dark:bg-[var(--rest-very-dark-value)]">
				<div className="flex flex-col gap-7">
					<div className="flex flex-col gap-6 sm:flex-row md:justify-between md:px-14">
						<Searchbox />
						<RegionFilter />
					</div>
					<Countries />
				</div>
			</main>
		</section>
	);
}
