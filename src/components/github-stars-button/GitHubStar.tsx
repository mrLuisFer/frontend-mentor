import { Star } from "lucide-react";
import { useState } from "react";
import { RxStarFilled } from "react-icons/rx";

export default function GitHubStar() {
	const [isMouseOver, setIsMouseOver] = useState(false);

	return (
		<div
			className="-ms-1 opacity-60 transition hover:opacity-100"
			onMouseOver={() => setIsMouseOver(true)}
			onMouseOut={() => setIsMouseOver(false)}
		>
			{isMouseOver ? (
				<RxStarFilled
					size={16}
					className="fill-yellow-300 text-yellow-300 dark:fill-yellow-400 dark:text-yellow-400"
				/>
			) : (
				<Star size={16} strokeWidth={2} aria-hidden="true" />
			)}
		</div>
	);
}
