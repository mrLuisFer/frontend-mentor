import iconReply from '../../../images/icon-reply.svg?url';
import iconDelete from '../../../images/icon-delete.svg?url';
import iconEdit from '../../../images/icon-edit.svg?url';
import { useCommentActions } from '../../../../../hooks/useCommentActions';
import { type AsComment, type Comment } from '../../../../../types/index.types';
import { type MouseEventHandler, type ReactNode, useContext } from 'react';
import { useEditingComment } from '@/challenges/interactive-comments/hooks/useEditingComment';
import { ReplyContext } from '@/challenges/interactive-comments/context/ReplyContext';
import { clsx } from 'clsx';

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
				<div className="flex items-center gap-2.5">
					<CommentHeaderActionsButtonStyled onClick={handleDeleteComment}>
						<img src={iconDelete} alt="delete" loading="lazy" />
						Delete
					</CommentHeaderActionsButtonStyled>
					<CommentHeaderActionsButtonStyled onClick={() => onToggleEditContent(true)}>
						<img src={iconEdit} alt="edit" loading="lazy" />
						Edit
					</CommentHeaderActionsButtonStyled>
				</div>
			) : (
				<button
					className={clsx(
						'text-[14px] font-medium text-[var(--comments-moderate-blue)] flex gap-[10px] items-center p-[5px] rounded-[5px] transition ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-200 user-select-none bg-transparent border border-transparent',
						'hover:bg-[#dfe5ec] hover:border-[#dfe5ec]',
						'active:brightness-90',
					)}
					onClick={() => {
						if (setIsReplying) setIsReplying((prevState) => !prevState);
					}}
				>
					<img src={iconReply} alt="icon-reply" loading="lazy" />
					Reply
				</button>
			)}
		</>
	);
}

function CommentHeaderActionsButtonStyled({ children, isFirstChild, isLastChild, onClick }: {
	children: ReactNode,
	isFirstChild?: boolean,
	isLastChild?: boolean,
	onClick: MouseEventHandler<HTMLButtonElement>
}) {
	return (

		<button
			onClick={onClick}
			className={clsx(
				'bg-transparent font-bold flex items-center gap-[5px] transition ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-200 p-[5px] rounded-[5px] user-select-none border border-transparent hover:border-[#dfe5ec] hover:bg-[#ebeff4]',
				{
					'text-[var(--comments-soft-red)] active:brightness-90': isFirstChild,
					'text-[var(--comments-moderate-blue)] active:brightness-90': isLastChild,
				},
			)}
		>
			{children}
		</button>
	);
}
