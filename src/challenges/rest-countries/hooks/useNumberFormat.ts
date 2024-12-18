import { useMemo } from "react";

export const useNumberFormat = (number: number) => {
	return useMemo(() => {
		if (!number) return undefined;
		const formattedPopulation = new Intl.NumberFormat("en-IN", {
			maximumSignificantDigits: 3,
		}).format(number);
		if (formattedPopulation) return formattedPopulation;
		return undefined;
	}, [number]);
};
