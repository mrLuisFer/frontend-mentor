export default function AgeLabel({
	value = "--",
	label = "",
}: {
	value?: number | string;
	label: string;
}) {
	return (
		<section className="flex flex-row items-center gap-[10px] text-5xl font-extrabold italic leading-tight">
			{value !== undefined ? <p>{value}</p> : <p>--</p>}
			<label>{label}</label>
		</section>
	);
}
