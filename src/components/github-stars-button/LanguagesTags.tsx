import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export default function LanguagesTags() {
	const [languagesTags, setLanguagesTags] = useState<string[] | null>(null);
	const [, setLanguagesCount] = useState<number | null>(null);

	useEffect(() => {
		const fetchLanguagesTags = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/repos/mrLuisFer/js-challenges-hub/languages"
				);
				if (response.status !== 200) {
					throw new Error("Invalid response status.");
				}
				const data = response.data;
				const count = Object.keys(data).length;
				const tags = Object.keys(data);
				setLanguagesCount(count);
				setLanguagesTags(tags);
			} catch (err) {
				console.error("Error fetching languages count:", err);
			}
		};

		fetchLanguagesTags();
	}, []);

	if (languagesTags === null) {
		return <span>Loading languages tags...</span>;
	}

	return (
		<div className="flex flex-wrap gap-1">
			{languagesTags.map((tag, index) => (
				<Badge key={index}>{tag}</Badge>
			))}
		</div>
	);
}
