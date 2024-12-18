import type { AllRoutes } from "@/enums/AllRoutes";
import type { Level } from "./Level";

export type Challenge = {
	title: string;
	description: string;
	image?: string;
	level: Level;
	tags: string[];
	route?: string;
};

export type ChallengeTitles = keyof typeof AllRoutes;
