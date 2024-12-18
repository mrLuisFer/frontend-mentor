export const formatReply = (value: string, replyTo: string | undefined) => {
	return `${replyTo ? `@${replyTo}` : ""} ${value}`;
};
