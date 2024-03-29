import { Link } from 'react-router-dom';
import { FooterLink } from '../../../lib/types/FooterLink';
import { AllRoutes } from '../../../lib/enums/AllRoutes';
import { FiExternalLink } from 'react-icons/fi';

const footerLinks: FooterLink[] = [
	{
		label: 'Terms & License',
		url: AllRoutes.terms,
	},
	{
		label: 'Github Profile',
		url: 'https://github.com/mrLuisFer',
	},
];

export default function Footer() {
	return (
		<div className="absolute bottom-0 left-0 w-full bg-[var(--app-blue)] max-h-28 sm:max-h-20">
			<div className="max-w-5xl mx-auto px-8 py-4 flex justify-between sm:items-center flex-col sm:flex-row gap-4 sm:gap-0">
				<div className="flex items-center gap-4">
					<img src="/favicon-mentor.png" alt="frontend-mentor" />
					<div className="flex flex-col">
						<span className="text-sm opacity-55">Challenges from</span>
						<a
							href="https://www.frontendmentor.io"
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
				<div className="flex items-center gap-6">
					{footerLinks.map((link) => {
						const urlRegex = new RegExp(
							'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()!@:%_+.~#?&//=]*)'
						);
						const isExternalLink = urlRegex.test(link.url);
						return (
							<Link
								key={link.label}
								to={link.url}
								className="text-sm transition opacity-80 hover:opacity-100"
								target={isExternalLink ? '_blank' : '_self'}
								rel={isExternalLink ? 'noreferrer noopener' : undefined}
							>
								{link.label}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
