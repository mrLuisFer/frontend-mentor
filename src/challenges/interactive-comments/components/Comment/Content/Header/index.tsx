import { useCommentActions } from '../../../../hooks/useCommentActions';
import HeaderActions from './HeaderActions/index';
import { type AsComment, type Comment } from '../../../../types/index.types';
import MobileHidden from '@/challenges/interactive-comments/components/MobileHidden';
import { clsx } from 'clsx';

export default function Header({
																 comment,
																 as,
																 setIsEditing,
																 isEditing,
															 }: {
	comment: Comment;
	as: AsComment;
	// eslint-disable-next-line no-unused-vars
	setIsEditing: (value: boolean) => void;
	isEditing: boolean;
}) {
	const username = comment.user.username;
	const { isAuthor } = useCommentActions({ comment, as });

	return (
		<header className="flex items-center justify-between">
			<div className="flex items-center gap-2.5">
				<img
					className="w-[30px] h-[30px] rounded-[50%] object-cover"
					src={comment.user.image.png}
					alt={username}
					loading="lazy"
				/>
				<h1 className="text-[14px] text-[var(--comments-dark-blue)] font-normal">
					{username}
					{isAuthor ? <span
						className={clsx(
							'bg-[hsl(238,40%,52%)] text-white text-[12px] py-[3px] px-[5px] rounded-[5px] ml-[5px] transition ease-[cubic-bezier(0.4,0,0.2,1)] duration-200 hover:brightness-110',
						)}
					>you</span> : null}
				</h1>
				<p className="font-normal text-sm text-[hsl(211,10%,45%)]">{comment.createdAt}</p>
			</div>
			<MobileHidden>
				<HeaderActions
					as={as}
					comment={comment}
					setIsEditing={setIsEditing}
					isEditing={isEditing}
				/>
			</MobileHidden>
		</header>
	);
}
