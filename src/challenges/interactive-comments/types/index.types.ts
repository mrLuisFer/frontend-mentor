export type UserImage = {
	png: string;
	webp: string;
};
export type User = {
	username: string;
	image: UserImage;
};
export type Comment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies?: Comment[] | undefined;
	replyingTo?: string;
};

export type CommentsData = {
	comments: Comment[];
	currentUser: User;
};

export type AsComment = "comment" | "replies";
