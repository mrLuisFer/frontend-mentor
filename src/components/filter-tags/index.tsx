import { tags } from "@/constants/challenges";
import FilterTag from "./components/Tag";
import { Label } from "@components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ListFilter } from "lucide-react";
import { useChallengesStore } from "@/stores/challengesStore";
import { type FormEvent, useState } from "react";

export default function Filter() {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const technologiesList = Object.values(tags);
	const { filterChallengesByTagName: filterChallengesByName, resetFilter } = useChallengesStore();

	const handleSubmitFilter = (event: FormEvent) => {
		event.preventDefault();
		event.stopPropagation();
		if (!selectedTags.length) return;
		filterChallengesByName(selectedTags);
	};

	const handleClickClearFilter = () => {
		setSelectedTags([]);
		resetFilter();
	};

	return (
		<section className="flex flex-row items-center gap-2 justify-center sm:justify-start">
			<section className="flex gap-3 items-center">
				<div className="flex flex-col gap-4">
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline" size="icon" aria-label="Filters">
								<ListFilter size={16} strokeWidth={2} aria-hidden="true" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-36 p-3">
							<div className="space-y-3">
								<div className="text-xs font-medium text-muted-foreground">Filters</div>
								<form className="space-y-3" onSubmit={handleSubmitFilter}>
									{technologiesList.map((tag) => (
										<FilterTag
											tag={tag}
											key={tag}
											setSelectedTags={setSelectedTags}
											selectedTags={selectedTags}
										/>
									))}
									<div
										role="separator"
										aria-orientation="horizontal"
										className="-mx-3 my-1 h-px bg-border"
									></div>
									<div className="flex justify-between gap-2">
										<Button
											size="sm"
											variant="outline"
											className="h-7 px-2"
											onClick={handleClickClearFilter}
										>
											Clear
										</Button>
										<Button size="sm" className="h-7 px-2">
											Apply
										</Button>
									</div>
								</form>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</section>
			<Label className="flex gap-2">Filter by Technologies</Label>
		</section>
	);
}
