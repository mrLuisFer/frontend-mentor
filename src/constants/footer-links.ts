import { frontendMentorUrl } from "@/enums/AllRoutes";
import type { FooterLink } from "@/types/FooterLink";

export const footerLinks: FooterLink[] = [
	{
		label: "Terms & License",
		url: `${frontendMentorUrl}/license`,
	},
	{
		label: "Github Profile",
		url: "https://github.com/mrLuisFer",
	},
	{
		label: "My Portfolio",
		url: "https://mrluisfer.vercel.app",
	},
];
