export type TDate = {
	day?: number;
	month?: number;
	year?: number;
};

export type TDatePlurals = {
	years: number;
	months: number;
	days: number;
};

export interface KeyOfDates extends Required<TDate> {
	[key: string]: number;
}
