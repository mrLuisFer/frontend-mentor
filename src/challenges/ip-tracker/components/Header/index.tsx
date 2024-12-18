import patternBgDesktop from "../../images/pattern-bg-desktop.png?url";
import patternBgMobile from "../../images/pattern-bg-mobile.png?url";
import Form from "./Form";

export default function Header() {
	return (
		<header className="flex items-start pt-9 md:pt-0 md:items-center justify-center relative h-[280px] overflow-hidden">
			<img
				src={patternBgDesktop}
				alt="pattern bg desktop"
				className="absolute inset-0 w-full -z-10 hidden lg:block h-full object-fill"
			/>
			<img
				src={patternBgMobile}
				alt="pattern bg mobile"
				className="absolute inset-0 w-full block lg:hidden -z-10 object-cover"
			/>
			<div className="min-w-80 flex items-center justify-center flex-col gap-6">
				<h1 className="text-white font-bold font-['Rubik'] text-3xl">IP Address Tracker</h1>
				<Form />
			</div>
		</header>
	);
}
