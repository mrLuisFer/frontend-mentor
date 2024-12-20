import iconReply from '../../../images/icon-reply.svg';
import iconDelete from '../../../images/icon-delete.svg';
import iconEdit from '../../../images/icon-edit.svg';
import { useCommentActions } from '../../../../../hooks/useCommentActions.ts';
import {
	CommentHeaderActionsButtonStyled,
	CommentHeaderActionsStyled,
	CommentHeaderReplyButtonStyled,
} from './HeaderActions.styles.ts';
import { useEditingComment } from '../../../../../hooks/useEditingComment.ts';
import { AsComment, Comment } from '../../../../../types/index.types.ts';
import { useContext } from 'react';
import { ReplyContext } from '@/views/Challenges/interactive-comments/context/ReplyContext.ts';

export default function HeaderActions({
	as,
	comment,
	setIsEditing,
	isEditing,
}: {
	as: AsComment;
	comment: Comment;
	// eslint-disable-next-line no-unused-vars
	setIsEditing: (value: boolean) => void;
	isEditing: boolean;
}) {
	const { handleDeleteComment, isAuthor } = useCommentActions({ comment, as });
	const { onToggleEditContent } = useEditingComment({
		comment,
		isAuthor,
		as,
		setIsEditing,
		isEditing,
	});
	const { setIsReplying } = useContext(ReplyContext);

	return (
		<>
			{isAuthor ? (
				<CommentHeaderActionsStyled>
					<CommentHeaderActionsButtonStyled onClick={handleDeleteComment}>
						<img src={iconDelete} alt="delete" loading="lazy" />
						Delete
					</CommentHeaderActionsButtonStyled>
					<CommentHeaderActionsButtonStyled onClick={() => onToggleEditContent(true)}>
						<img src={iconEdit} alt="edit" loading="lazy" />
						Edit
					</CommentHeaderActionsButtonStyled>
				</CommentHeaderActionsStyled>
			) : (
				<CommentHeaderReplyButtonStyled
					onClick={() => {
						if (setIsReplying) setIsReplying((prevState) => !prevState);
					}}
				>
					<img src={iconReply} alt="icon-reply" loading="lazy" />
					Reply
				</CommentHeaderReplyButtonStyled>
			)}
		</>
	);
}
