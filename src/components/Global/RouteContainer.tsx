import React, { PropsWithChildren } from "react";
import Header from "./header";

export default function RouteContainer({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
