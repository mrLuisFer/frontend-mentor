import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useThemeStore } from "../../context/useThemeStore.js";
import { Theme, type ThemeKeys } from "../../enums/Theme.js";

const alternateTheme = {
	[Theme.light]: Theme.dark,
	[Theme.dark]: Theme.light,
};

export default function Header() {
	const { theme: themeStore, setTheme } = useThemeStore();
	const isDarkTheme = themeStore === Theme.dark;

	const handleToggleTheme = () => {
		const theme = (themeStore ?? localStorage.getItem(Theme.key)) as ThemeKeys;
		const newTheme = alternateTheme[theme ?? ""] as ThemeKeys;
		if (newTheme.length) {
			setTheme(newTheme);
		}
	};

	return (
		<header className="flex items-center justify-between px-4 py-6 bg-[var(--rest-white)] dark:bg-[var(--rest-dark-blue)] shadow-md dark:text-[var(--rest-white)] md:px-14">
			<h1 className="font-bold text-lg sm:text-xl">Where in the world?</h1>
			<button
				className="flex items-center gap-2 hover:bg-[var(--rest-very-light-gray)] dark:hover:bg-[var(--rest-very-dark-value)] py-1 px-2 rounded-lg transition transform active:scale-95"
				onClick={handleToggleTheme}
			>
				{isDarkTheme ? (
					<>
						<FiSun />
						<span>Light Mode</span>
					</>
				) : (
					<>
						<IoMoonOutline />
						<span>Dark Mode</span>
					</>
				)}
			</button>
		</header>
	);
}
