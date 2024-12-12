// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { useDarkModeStore } from "@/stores/darkModeStore";

// const htmlFor = "dark-mode-switch";
// export default function DarkModeButton() {
// 	const { darkMode, toggleDarkMode } = useDarkModeStore();
// 	return (
// 		<div className="flex items-center gap-2 p-3 border-2 border-solid hover:border-slate-200 hover:bg-slate-50 hover:dark:bg-slate-900 hover:dark:border-slate-500 w-fit h-fit transition rounded-lg">
// 			<Label htmlFor={htmlFor} className="font-semibold select-none md:select-text">
// 				Dark Mode
// 			</Label>
// 			<Switch
// 				id={htmlFor}
// 				checked={darkMode}
// 				onCheckedChange={(checked) => toggleDarkMode(checked)}
// 			/>
// 		</div>
// 	);
// }

import { useDarkModeStore } from "@/stores/darkModeStore";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function CheckboxDemo() {
	const [theme, setTheme] = useState<string>("light");
	const { toggleDarkMode } = useDarkModeStore();

	return (
		<div className="space-y-4">
			<legend className="hidden text-sm font-medium leading-none text-foreground">
				Dark mode toggle checkbox
			</legend>
			<div className="flex flex-col justify-center">
				<input
					type="checkbox"
					name="theme-checkbox"
					id="theme-checkbox"
					className="peer sr-only"
					checked={theme === "dark"}
					onChange={({ target: { checked } }) => {
						setTheme((prev) => (prev === "dark" ? "light" : "dark"));
						// is opposite of theme because it's toggling related with the icons
						toggleDarkMode(!checked);
					}}
				/>
				<label
					className="group relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-background text-foreground shadow-sm shadow-black/5 transition-colors hover:bg-accent hover:text-accent-foreground peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ring/70"
					htmlFor="theme-checkbox"
					aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
				>
					{/* Note: After dark mode implementation, rely on dark: prefix rather than peer-checked:group-[]: */}
					<span className="group-[]:hidden">Light</span>
					<Moon
						size={16}
						strokeWidth={2}
						className="shrink-0 scale-0 opacity-0 transition-all peer-checked:group-[]:scale-100 peer-checked:group-[]:opacity-100"
						aria-hidden="true"
					/>
					<Sun
						size={16}
						strokeWidth={2}
						className="absolute shrink-0 scale-100 opacity-100 transition-all peer-checked:group-[]:scale-0 peer-checked:group-[]:opacity-0"
						aria-hidden="true"
					/>
				</label>
			</div>
		</div>
	);
}
