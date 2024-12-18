export default function Level({ level }: { level: string | number }) {
	return (
		<span className="text-xs py-1 px-2 bg-primary rounded-md uppercase text-white font-bold transition">
			{level}
		</span>
	);
}
