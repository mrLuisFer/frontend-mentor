/**
 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
 * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
 * Dispatches a storage event on Window objects holding an equivalent Storage object.
 * @param {string} key
 * @param {string} value - Will be converted into a string
 */
export function setItem(key: string, value: unknown) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		console.error(e);
	}
}

/**
 * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
 * @param {string} key
 */
export function getItem(key: string) {
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	} catch (e) {
		console.error(e);
	}
}
