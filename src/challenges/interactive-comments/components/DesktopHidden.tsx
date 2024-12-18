import type { ReactNode } from 'react';

function DesktopHidden({ children }: { children: ReactNode }) {
	return (
		<div className="block md:hidden">
			{children}
		</div>
	);
}

export default DesktopHidden
