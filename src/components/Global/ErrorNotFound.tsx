import BackToDashboardBtn from "./BackToDashboardBtn.js";

export default function ErrorNotFound() {
	return (
		<main className="bg-[var(--app-dark-blue)] h-screen text-white flex items-center justify-center">
			<section className="bg-gray-100 border-2 border-transparent transition hover:border-[var(--app-yellow)] p-8 rounded-lg shadow-sm flex flex-col items-center">
				<h1 className="text-black font-semibold text-2xl">Page or Challenge not found!</h1>
				<img
					src="/undraw_page_not_found.svg"
					alt="Undraw Page Not Found"
					className="h-80 w-96 select-none"
					draggable="false"
				/>
				<div>
					<BackToDashboardBtn />
				</div>
			</section>
		</main>
	);
}
