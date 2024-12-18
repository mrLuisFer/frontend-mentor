import { type ChangeEvent, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { useCountriesStore } from "../../context/useCountriesStore.js";
import { api } from "../../api.js";

export default function Searchbox() {
	const inputRef = useRef<HTMLInputElement>(null);
	const { countrySearch, setCountrySearch, setCountries, regionSelected } = useCountriesStore();

	const handleSearchCountry = (e: ChangeEvent<HTMLInputElement>) => {
		setCountrySearch(e.target.value);
		if (!countrySearch?.length) {
			setCountries(api);
		}
		const filterSearchCountries = api?.filter((country) => {
			if (regionSelected) {
				return (
					country.name.toLowerCase().includes(countrySearch?.toLowerCase() ?? "") &&
					country.region === regionSelected
				);
			}
			return country.name.toLowerCase().includes(countrySearch?.toLowerCase() ?? "");
		});
		setCountries(filterSearchCountries);
	};

	return (
		<div
			className="bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] shadow-md flex items-center justify-center px-10 gap-5 rounded-md min-h-12 sm:w-full md:max-w-lg"
			onClick={() => {
				inputRef?.current?.focus();
			}}
		>
			<IoMdSearch className="text-2xl text-[var(--rest-dark-gray)]" />
			<input
				ref={inputRef}
				type="text"
				placeholder="Search for a country..."
				className="w-full h-12 outline-none text-base bg-transparent dark:text-[var(--rest-white)]"
				value={countrySearch}
				onChange={handleSearchCountry}
			/>
		</div>
	);
}
