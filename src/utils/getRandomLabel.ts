export const getRandomLabel = (stringArray: string[], trim: number = 20) => {
	const randomIndex = Math.floor(Math.random() * stringArray.length);
	return `${stringArray[randomIndex].slice(0, trim)}...`;
};
