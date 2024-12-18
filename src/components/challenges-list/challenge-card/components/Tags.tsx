import { useMemo } from "react";
import Tag from "./Tag";

type ChallengeCardTagsProps = {
	tags: string[];
};

export default function ChallengeCardTags({ tags }: ChallengeCardTagsProps) {
	const hasNotTags = useMemo(() => !tags.length, [tags]);
	return (
		<>
			{hasNotTags ? null : (
				<div className="flex gap-4">
					{tags?.map((tag, index) => <Tag key={index} name={tag} />)}
				</div>
			)}
		</>
	);
}
