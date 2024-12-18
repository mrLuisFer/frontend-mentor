export default function NotFound() {
	return (
		<div className="flex items-start flex-col gap-2 justify-center h-full w-full pt-4 animate-in">
			<h2 className="text-xl font-bold">
				Oops! It seems you&#39;ve wandered off the path… We couldn&#39;t find any challenges
			</h2>
			<img
				src="/assets/undraw-adventure.svg"
				alt="Illustration of a person holding a map and a compass"
				className="w-auto h-auto"
			/>
		</div>
	);
}
