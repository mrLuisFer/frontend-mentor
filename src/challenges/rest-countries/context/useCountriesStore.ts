import { create } from "zustand";
import type { Countries } from "../types/Api.js";

interface ThemeStore {
	countries: Countries | undefined;
	// eslint-disable-next-line no-unused-vars
	setCountries: (newCountries: Countries) => void;
	regionSelected: string | undefined;
	// eslint-disable-next-line no-unused-vars
	setRegionSelected: (newRegion: string | undefined) => void;
	countrySearch: string | undefined;
	// eslint-disable-next-line no-unused-vars
	setCountrySearch: (newValue: string | undefined) => void;
}

export const useCountriesStore = create<ThemeStore>((set) => ({
	countries: [],
	setCountries: (newCountries) => {
		set(() => ({ countries: newCountries }));
	},
	regionSelected: "",
	setRegionSelected: (newRegion) => {
		set(() => ({ regionSelected: newRegion }));
	},
	countrySearch: "",
	setCountrySearch: (newValue) => {
		set(() => ({ countrySearch: newValue }));
	},
}));
