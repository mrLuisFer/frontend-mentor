import { Button } from "@/components/ui/button";
import { GoHome } from "react-icons/go";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function BackToDashboardBtn() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button className="flex transform items-center rounded-lg p-3 text-sm capitalize filter transition hover:brightness-95 active:scale-95 active:bg-orange-400 dark:bg-slate-200 active:dark:bg-orange-200">
						<GoHome />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Back to Dashboard</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
