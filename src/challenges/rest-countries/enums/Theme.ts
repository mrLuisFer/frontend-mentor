/* eslint-disable no-unused-vars */
export enum Theme {
	light = "light",
	dark = "dark",
	key = "theme",
}

export type ThemeKeys = `${Exclude<Theme, Theme.key>}`;
