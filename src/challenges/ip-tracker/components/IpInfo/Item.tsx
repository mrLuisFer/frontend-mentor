export default function Item({ label, value }: { label: string; value?: string }) {
	return (
		<div className="flex flex-col gap-0 lg:gap-2 items-center md:items-start">
			<span className="text-[var(--dark-gray)] font-bold text-sm uppercase text-center md:text-left">
				{label}
			</span>
			<p className="text-[var(--ip-very-dark-gray)] font-bold text-xl md:text-2xl max-w-48 text-center md:text-left">
				{value}
			</p>
		</div>
	);
}
