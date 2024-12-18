import { challengesInitialState } from "@/constants/challenges";
import type { ChallengeStore } from "@/types/ChallengeStore.ts";
import { create } from "zustand";

export const useChallengesStore = create<ChallengeStore>()((set) => ({
	initialChallenges: challengesInitialState,
	challenges: challengesInitialState,
	queryChallenges: "",
	setQueryChallenges: (query) => {
		set(() => ({ queryChallenges: query }));
	},
	filteredChallenges: challengesInitialState,
	setFilteredChallenges: (filteredChallenges) => {
		set(() => ({ filteredChallenges }));
	},
	filterChallengesByTagName: (names: string[]) => {
		set((state) => {
			const filteredChallenges = state.challenges.filter((challenge) =>
				names.every((name) => challenge.tags.includes(name))
			);
			return { filteredChallenges };
		});
	},
	resetFilter: () => {
		set(() => ({ filteredChallenges: challengesInitialState }));
	},
	filterChallengesByTitle: (title: string) => {
		if (!title) throw new Error("Title is required");
		set((state) => {
			const filteredChallenges = state.challenges.filter((challenge) =>
				challenge.title.toLowerCase().includes(title.toLowerCase())
			);
			return { filteredChallenges };
		});
	},
}));
