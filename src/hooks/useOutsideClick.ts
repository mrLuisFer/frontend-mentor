import { useEffect, useRef } from "react";

/**
 * A custom hook that invokes a callback when a click occurs outside a specified element.
 */
export function useOutsideClick<T extends HTMLElement>(callback: () => void | unknown) {
	// Create a ref to store the reference to the specified element.
	const ref = useRef<T | null>(null);

	useEffect(() => {
		// Function to handle click events on the document.
		const handleClick = (event: MouseEvent) => {
			const target = event.target;

			// Check if the specified element exists and the clicked target is not a child of it.
			if (ref.current && !ref.current?.contains(target as Node)) {
				// Invoke the callback when a click occurs outside the specified element.
				callback();
			}
		};

		// Attach the click event listener to the document during component mount.
		document.addEventListener("click", handleClick, true);

		// Detach the click event listener during component unmount to prevent memory leaks.
		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [ref, callback]); // Re-run the effect if the ref or callback function changes.

	// Return the ref object to be attached to the target element.
	return ref;
}
