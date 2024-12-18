import AgeInputs from "./lib/AgeInputs/index";
import Separator from "./lib/Separator/index";
import AgePreview from "./lib/AgePreview/AgePreview/index";
import { useCallback, useEffect, useState } from "react";
import type { TDate, TDatePlurals } from "./types/index.ts";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
import clsx from "clsx";

export default function AgeCalculator() {
	const [date, setDate] = useState<TDate>({
		day: 20,
		month: 9,
		year: 2003,
	});
	const [showAge, setShowAge] = useState<boolean>(false);
	const [newDate, setNewDate] = useState<TDatePlurals>({} as TDatePlurals);

	const getCurrentDate = useCallback(() => {
		const now = new Date();
		const currentYear = now.getFullYear();
		const currentMonth = now.getMonth() + 1;
		const currentDay = now.getDate();

		let years = currentYear - (date?.year ?? 0);
		let months = currentMonth - (date?.month ?? 0);
		let days = currentDay - (date?.day ?? 0);

		if (months < 0 || (months === 0 && days < 0)) {
			years--;
		}

		if (months < 0) {
			months += 12;
		}

		if (days < 0) {
			days += 30;
		}

		return { years, months, days };
	}, [date?.day, date?.month, date?.year]);

	useEffect(() => {
		if (isObjectEmpty(date)?.isEmpty) return;
		const newDate = getCurrentDate();
		setNewDate(newDate);
	}, [date, getCurrentDate]);

	return (
		<div className="flex min-h-screen items-start justify-center bg-gray-200 py-8">
			<main className="flex flex-col items-center gap-8 rounded-bl-[100px] rounded-br-[25px] rounded-tl-[25px] rounded-tr-[25px] bg-white px-12 py-5">
				<AgeInputs setShowAge={setShowAge} date={date} setDate={setDate} />
				<Separator
					showAge={showAge}
					onClick={() => {
						setNewDate(getCurrentDate());
					}}
				/>
				<AgePreview newDate={newDate} />
				<p
					className={clsx(
						"m-0 max-w-52 self-start text-xs font-normal lowercase italic transition",
						{
							"opacity-0": showAge,
							"opacity-30": !showAge,
						}
					)}
				>
					change the value of inputs to get your age
				</p>
			</main>
		</div>
	);
}
