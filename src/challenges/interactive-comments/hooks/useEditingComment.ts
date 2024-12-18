import { useContext } from "react";
import { CommentsContext } from "../context/CommentsContext.js";
import type { AsComment, Comment } from "../types/index.types.js";

interface UseEditingComment {
	isAuthor: boolean;
	// eslint-disable-next-line no-unused-vars
	setIsEditing: (state: boolean) => void;
	isEditing: boolean;
	comment: Comment;
	as: AsComment;
}
export const useEditingComment = ({
	isAuthor,
	setIsEditing,
	isEditing,
	comment,
	as,
}: UseEditingComment) => {
	const { comments, setComments } = useContext(CommentsContext);

	const onToggleEditContent = (newState: boolean) => {
		if (!isAuthor) return;
		setIsEditing(newState);
	};

	const handleUpdatedContent = (editedContent: string) => {
		if (editedContent === comment.content) {
			onToggleEditContent(false);
			return;
		}
		const updatedComment = { ...comment, content: editedContent };
		onToggleEditContent(false);
		if (as === "comment") {
			const updatedComments = comments?.map((c) => (c.id === comment.id ? updatedComment : c));
			if (updatedComments) setComments?.(updatedComments);
		} else if (as === "replies") {
			const updatedComments = comments?.map((c) => {
				if (c.replies) {
					const updatedReplies = c.replies.map((r) => (r.id === comment.id ? updatedComment : r));
					return { ...c, replies: updatedReplies };
				}
				return c;
			});
			if (updatedComments) setComments?.(updatedComments);
		}
	};

	return {
		isEditing,
		onToggleEditContent,
		handleUpdatedContent,
		setIsEditing,
	};
};
