import BackToDashboardBtn from "../BackToDashboardBtn";
import HeaderHistory from "@/components/global/header/components/History";
import { useMemo } from "react";
import DarkModeButton from "@/components/dark-mode-button";
import { useWindowLocation } from "@/hooks/useWindowLocation";

export default function Header() {
	const { location } = useWindowLocation();
	const title = useMemo(() => location.replace("/", "").split("-").join(" "), []);

	return (
		<header className="flex py-2 px-2 sm:px-8 justify-between items-center">
			<section className="flex gap-4 items-center">
				<BackToDashboardBtn />
				<HeaderHistory currentLocation={title} />
			</section>
			<div className="flex gap-5 justify-evenly items-end">
				<div className="flex items-start md:gap-1 flex-col">
					<span className="font-semibold opacity-70 text-xs">Challenge:</span>
					<h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl capitalize font-serif">
						{title}
					</h1>
				</div>
				<DarkModeButton />
			</div>
		</header>
	);
}
