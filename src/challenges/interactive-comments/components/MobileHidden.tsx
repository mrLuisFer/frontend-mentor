import type { ReactNode } from 'react';

function MobileHidden({ children }: { children: ReactNode }) {
	return (
		<div className="hidden md:block">
			{children}
		</div>
	);
}

export default MobileHidden
