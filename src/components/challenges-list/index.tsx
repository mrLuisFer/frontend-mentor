import { useChallengesStore } from "@/stores/challengesStore.js";
import NotFound from "./NotFound.js";
import ChallengeCard from "./challenge-card";

export default function ChallengesRender() {
	const { filteredChallenges } = useChallengesStore();

	return (
		<>
			{filteredChallenges.length ? (
				<section className="pt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center h-full">
					{filteredChallenges.map((challenge, index) => (
						<ChallengeCard key={index} challengeInfo={challenge} index={index} />
					))}
				</section>
			) : (
				<NotFound />
			)}
		</>
	);
}
