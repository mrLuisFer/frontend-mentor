import { type ChangeEvent, type Dispatch, type SetStateAction, useMemo, useState } from "react";
import { labels, maxValues, minValues } from "../../contants/index.js";
import clsx from "clsx";

type InputProps = {
	label: string;
	error?: string;
	// eslint-disable-next-line no-unused-vars
	setValue: (value: number) => void;
	setShowAge?: Dispatch<SetStateAction<boolean>>;
	defaultValue?: number;
	value: number | undefined;
};

export default function Input({
	setValue,
	label,
	error,
	setShowAge,
	defaultValue,
	value,
}: InputProps) {
	const [showError, setShowError] = useState(false);

	const isDay = useMemo(() => label === labels.day, [label]);
	const isMonth = useMemo(() => label === labels.month, [label]);
	const isYear = useMemo(() => label === labels.year, [label]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>, fieldType: string) => {
		const inputValue = +event.target.value;
		setShowError(false);
		setShowAge?.(false);

		const validators = {
			[labels.day]: () => inputValue <= maxValues.day,
			[labels.month]: () => inputValue <= maxValues.month,
			[labels.year]: () => inputValue <= maxValues.year,
		};

		if (validators[fieldType]?.()) {
			setValue(inputValue);
		}

		const isDayError = isDay && (inputValue < 1 || inputValue > maxValues.day);
		const isMonthError = isMonth && (inputValue < 1 || inputValue > maxValues.month);
		const isYearError = isYear && (inputValue < 1900 || inputValue > maxValues.year);

		if (isDayError || isMonthError || isYearError) {
			setShowError(true);
		}
	};

	return (
		<div className="flex w-full flex-1 flex-col">
			<label
				htmlFor={`${label}-input`}
				className={clsx("text-xs font-bold uppercase tracking-[3px]", {
					"text-[#f44336]": showError,
					"text-[#6f6f6f]": !showError,
				})}
			>
				{label}
			</label>
			<input
				id={`${label}-input`}
				type="number"
				onChange={(event) => handleChange(event, label)}
				max={maxValues[label]} // day, month, year
				min={minValues[label]}
				pattern="\d*"
				defaultValue={defaultValue}
				value={value || undefined}
				className={
					"w-full rounded-[8px] border p-3 text-xl font-bold text-[#333] outline outline-1 outline-[hsl(0,0%,86%)] selection:bg-[hsl(259,100%,65%)] selection:text-[#fff] focus-visible:outline-[hsl(259,100%,65%)]"
				}
			/>
			{showError ? (
				<span className="color-[hsl(0,100%,67%)] m-0 text-xs font-bold">{error}</span>
			) : null}
		</div>
	);
}
