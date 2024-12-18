import { type HTMLAttributes } from "react";
import iconArrow from "../../assets/images/icon-arrow.svg?url";
import "./styles/separator.css";
import clsx from "clsx";

type SeparatorProps = {
	showAge: boolean;
	onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export default function Separator(props: SeparatorProps) {
	const { showAge, onClick } = props;

	return (
		<div className="after-line relative flex w-full select-none items-center justify-center sm:justify-end">
			<button
				className={clsx(
					"z-2 flex h-12 w-12 items-center justify-center rounded-full border outline-none transition duration-150 ease-linear",
					{
						"bg-[--age-off-black]": showAge,
						"bg-[--age-purple]": !showAge,
						"hover:border-[--age-purple] hover:bg-[--age-off-black] hover:brightness-90": true,
						"active:scale-90": true,
					}
				)}
				onClick={onClick}
				title="Get your age"
			>
				<img src={iconArrow} alt="Arrow icon" loading="lazy" draggable="false" />
			</button>
		</div>
	);
}
