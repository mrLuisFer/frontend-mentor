import type { Challenge } from "@/types/Challenge";
import ChallengeCardThumbnail from "./components/Thumbnail";
import ChallengeCardHeader from "./components/Header";
import ChallengeCardContent from "./components/Content";
import ChallengeCardTags from "./components/Tags";

export default function ChallengeCard({
	challengeInfo: challenge,
	index,
}: {
	challengeInfo: Challenge;
	index: number;
}) {
	return (
		<a href={challenge.route ?? ""} key={index} className="animate-in">
			<article
				key={index}
				className="group max-w-80 scale-100 rounded-md border-2 border-neutral-300 border-opacity-50 bg-white filter transition-all hover:border-opacity-75 hover:shadow-md hover:shadow-yellow-100 active:scale-95 active:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-950"
			>
				{challenge?.image ? (
					<ChallengeCardThumbnail
						src={challenge.image || ""}
						title={challenge.title}
						description={challenge.description}
					/>
				) : null}
				<div className="flex flex-col gap-4 p-4">
					<ChallengeCardHeader title={challenge.title} level={challenge.level} />
					<ChallengeCardContent description={challenge.description} />
					<ChallengeCardTags tags={challenge.tags} />
				</div>
			</article>
		</a>
	);
}
