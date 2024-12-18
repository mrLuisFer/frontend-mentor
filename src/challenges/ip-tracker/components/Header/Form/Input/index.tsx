import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Input({
	value: inputValue,
	setValue: setInputValue,
}: {
	value?: string;
	setValue?: Dispatch<SetStateAction<string | undefined>>;
}) {
	return (
		<input
			type="text"
			height="h-full"
			className="outline-none w-full md:w-[450px] rounded-l-lg py-2 pl-6 text-sm md:text-md"
			placeholder="Search for any IP address or domain"
			value={inputValue}
			role="combobox"
			onChange={(event: ChangeEvent<HTMLInputElement>) => {
				const value = event.target.value;
				setInputValue?.(value);
			}}
		/>
	);
}
