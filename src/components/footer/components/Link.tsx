type FooterLinkProps = {
	url: string;
	label: string;
};

export default function FooterLink({ label, url }: FooterLinkProps) {
	const urlRegex = new RegExp(
		"https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()!@:%_+.~#?&/=]*)"
	);
	const isExternalLink = urlRegex.test(url);

	return (
		<a
			key={label}
			href={url}
			className="underline-animated opacity-80 hover:opacity-100"
			target={isExternalLink ? "_blank" : "_self"}
			rel={isExternalLink ? "noopener noreferrer" : undefined}
		>
			{label}
		</a>
	);
}
