import { type MouseEventHandler, type ReactNode, useState } from 'react';
import { useCommentActions } from '../../../hooks/useCommentActions.js';
import iconPlus from '../images/icon-plus.svg?url';
import iconMinus from '../images/icon-minus.svg?url';
import type { AsComment, Comment } from '../../../types/index.types.js';
import { clsx } from 'clsx';

export default function Likes({ comment, as }: { comment: Comment; as: AsComment }) {
	const [likes, setLikes] = useState(comment.score);
	const [isPlusVoted, setIsPlusVoted] = useState(false);
	const [isMinusVoted, setIsMinusVoted] = useState(false);
	const { isAuthor } = useCommentActions({ comment, as });
	const imgSize = 13;

	function handlePlusVote() {
		if (isAuthor) return;
		if (isPlusVoted) {
			setIsPlusVoted(false);
			setLikes(comment.score);
			return;
		}
		setIsPlusVoted(true);
		setIsMinusVoted(false);
		setLikes(comment.score + 1);
	}

	function handleMinusVote() {
		if (isAuthor) return;
		if (isMinusVoted) {
			setIsMinusVoted(false);
			setLikes(comment.score);
			return;
		}
		setIsMinusVoted(true);
		setIsPlusVoted(false);
		setLikes(comment.score - 1);
	}

	return (
		<div className={clsx(
			'flex flex-row bg-[var(--comments-light-gray)] p-2.5 rounded-[10px] w-[90px] justify-between select-none',
			'md:flex-col md:items-center md:h-[80px] md:mt-1 md:w-[50px] md:justify-center',
			'lg:mt-0 lg:p-0 lg:grid lg:grid-rows-[repeat(3,1fr)] lg:h-full',
		)}>
			<LikesButtonStyled onClick={handlePlusVote} isPressed={isPlusVoted}>
				<img src={iconPlus} alt="icon-plus" width={imgSize} height={imgSize} />
			</LikesButtonStyled>
			<span
				className={clsx(
					'rounded-md p-1 text-[hsl(238,40%,52%)] font-medium text-[14px] transition ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-200',
					isPlusVoted || isMinusVoted ? 'bg-[#ebeff4]' : '',
					'tablet:text-[16px]',
				)}
			>
				{likes}
			</span>
			<LikesButtonStyled onClick={handleMinusVote} isPressed={isMinusVoted}>
				<img src={iconMinus} alt="icon-minus" width={imgSize} height={imgSize} />
			</LikesButtonStyled>
		</div>
	);
}

function LikesButtonStyled({ isPressed, children, onClick }: {
	isPressed: boolean,
	children: ReactNode,
	onClick: MouseEventHandler<HTMLButtonElement>
}) {
	return (
		<button onClick={onClick} className={clsx(
			'bg-transparent border-none transition ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-200',
			'flex justify-center items-center',
			isPressed ? 'filter brightness-70' : '',
			'hover:filter hover:brightness-80',
		)}>
			{children}
		</button>
	);
}
