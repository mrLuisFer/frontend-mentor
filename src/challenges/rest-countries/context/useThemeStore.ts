import { create } from "zustand";
import { Theme, type ThemeKeys } from "../enums/Theme.js";

interface ThemeStore {
	theme: ThemeKeys | undefined;
	setLight: () => void;
	setDark: () => void;
	// eslint-disable-next-line no-unused-vars
	setTheme: (theme: ThemeKeys) => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
	theme: undefined,
	setLight: () => {
		const documentList = document && document?.documentElement?.classList;
		set(() => ({ theme: Theme.light }));
		documentList.remove(Theme.dark);
		documentList.add(Theme.light);
		localStorage.setItem(Theme.key, Theme.light);
		document.body.classList.replace(Theme.dark, Theme.light);
	},
	setDark: () => {
		set(() => ({ theme: Theme.dark }));
		const documentList = document && document?.documentElement?.classList;
		documentList.remove(Theme.light);
		documentList.add(Theme.dark);
		localStorage.setItem(Theme.key, Theme.dark);
		document.body.classList.replace(Theme.light, Theme.dark);
	},
	setTheme: (newTheme) => {
		set(() => ({ theme: newTheme }));
		const documentList = document && document?.documentElement?.classList;
		const prevTheme = localStorage.getItem(Theme.key);
		if (!prevTheme) return;
		documentList.remove(prevTheme);
		documentList.add(newTheme);
		localStorage.setItem(Theme.key, newTheme);
		document.body.classList.replace(prevTheme, newTheme);
	},
}));
