export function sanitizeText(input: string): string {
	const withoutAccents = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	const sanitizedText = withoutAccents.replace(/[.,]/g, "").replace(/\s+/g, "-").toLowerCase();

	return sanitizedText;
}
