type ChallengeCardContentProps = {
	description: string;
};

export default function ChallengeCardContent({ description }: ChallengeCardContentProps) {
	return (
		<article>
			<p className="opacity-55 text-sm group-hover:opacity-100 transition text-ellipsis text-wrap">
				{description}
			</p>
		</article>
	);
}
