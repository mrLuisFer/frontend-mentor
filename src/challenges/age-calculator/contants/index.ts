import type { KeyOfDates } from "../types";

export const maxValues: KeyOfDates = {
	day: 31,
	month: 12,
	year: 2021, // TODO: refactor year logic
};

export const minValues: KeyOfDates = {
	day: 0,
	month: 0,
	year: 1900,
};

export const labels = {
	day: "day",
	month: "month",
	year: "year",
};
