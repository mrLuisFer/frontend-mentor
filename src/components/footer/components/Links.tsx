import { footerLinks } from "@/constants/footer-links";
import { useMemo } from "react";
import FooterLink from "./Link";

export default function FooterLinks() {
	const hasLinks = useMemo(() => footerLinks.length > 0, []);

	return (
		<div className="flex items-center gap-6">
			{hasLinks
				? footerLinks?.map((link) => (
						<FooterLink url={link.url} label={link.label} key={`${link.url}-${link.label}`} />
					))
				: null}
		</div>
	);
}
