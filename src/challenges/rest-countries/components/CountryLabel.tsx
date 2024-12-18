export default function CountryLabel({
	label,
	value,
}: {
	label: string | undefined;
	value: string | number | string[] | undefined;
}) {
	if (!value || !label) return null;

	const isValueArray = typeof value === "object" && Array.isArray(value);

	return (
		<p className="flex items-center gap-1">
			<span className="font-semibold">{label}:</span>
			<span className="dark:text-[var(--rest-very-light-gray)] opacity-90">
				{isValueArray ? value.map((v) => v) : value}
			</span>
		</p>
	);
}
