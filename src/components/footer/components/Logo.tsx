import { frontendMentorUrl } from "@/enums/AllRoutes";
import { FiExternalLink } from "react-icons/fi";

/**
 * @deprecated
 */
export default function FooterLogo() {
	return (
		<div className="flex items-center gap-4">
			<img
				src="/favicon-mentor.png"
				alt="frontend-mentor"
				className="motion-reduce:hidden w-8 h-8"
			/>
			<div className="flex flex-col">
				<span className="text-sm opacity-55">Challenges from</span>
				<a
					href={frontendMentorUrl}
					className="hover:text-yellow-100"
					target="_blank"
					rel="noreferrer noopener"
				>
					<span className="font-semibold flex items-center gap-2">
						© Frontend Mentor
						<FiExternalLink />
					</span>
				</a>
			</div>
		</div>
	);
}
