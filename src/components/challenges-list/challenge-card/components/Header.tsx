import Level from "./Level";

type ChallengeCardHeaderProps = {
	title: string;
	level: string | number;
};

export default function ChallengeCardHeader({ title, level }: ChallengeCardHeaderProps) {
	return (
		<div className="flex items-center justify-between flex-wrap gap-2">
			<h2 className="text-2xl font-serif capitalize">{title}</h2>
			<Level level={level} />
		</div>
	);
}
