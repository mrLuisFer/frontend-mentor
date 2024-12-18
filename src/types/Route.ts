import type { JSX } from "react";

export type SingleRoute = {
	path: string;
	Element: JSX.Element;
};

export interface Route extends SingleRoute {
	children?: SingleRoute[];
}
