import FooterLinks from "./components/Links";

export default function Footer() {
	return (
		<div className="static bottom-0 left-0 w-full text-white max-h-28 h-fit py-4 bg-neutral-900">
			<div className="max-w-5xl mx-auto px-8 py-4 flex justify-between sm:items-center flex-col sm:flex-row gap-4 sm:gap-0">
				<div className="animate-pulse">Made with &#128153; by mrLuisFer</div>
				<FooterLinks />
			</div>
		</div>
	);
}
