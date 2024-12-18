import { type MouseEvent, type ReactNode, useContext, useState } from 'react';
import { useGetUser } from '../../hooks/useGetUser.js';
import { useCommentActions } from '../../hooks/useCommentActions.js';
import type { AsComment, Comment } from '../../types/index.types.js';
import { ReplyContext } from '../../context/ReplyContext.js';
import { clsx } from 'clsx';
import DesktopHidden from '@/challenges/interactive-comments/components/DesktopHidden';
import MobileHidden from '@/challenges/interactive-comments/components/MobileHidden';

export default function Reply({ as = 'comment', comment }: { as?: AsComment; comment?: Comment }) {
	const [value, setValue] = useState('');
	const { user } = useGetUser();
	const isReply = as === 'replies';
	const { handleAddComment, handleAddReply } = useCommentActions({
		as,
		comment,
	});
	const { setIsReplying } = useContext(ReplyContext);

	function handleSendReply() {
		if (!value) return;
		if (isReply) {
			handleAddReply(value, comment!);
			if (setIsReplying) setIsReplying(false);
		} else if (as === 'comment') handleAddComment(value);
		setValue('');
	}

	return (
		<div
			className={clsx(
				'bg-white rounded-[10px] flex items-start justify-between gap-[15px] transition ease-in-out duration-200 p-[15px]',
				{
					'w-[290px] ml-auto': isReply,
					'w-[330px] ml-0': !isReply,
				},
				'md:max-w-[520px] md:mr-0 md:flex-row md:w-full md:p-[20px]',
				{
					'md:mt-[15px]': !isReply,
				},
				'hover:shadow-[1px_1px_2px_1px_var(--comments-light-gray)]',
			)}
		>
			<MobileHidden>
				<img
					src={user.image.png}
					alt={user.username}
					title={user.username}
					loading="lazy"
					className="w-[40px] h-[40px] object-cover rounded-[50%]"
				/>
			</MobileHidden>
			<textarea
				placeholder="Add a comment..."
				rows={5}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				className={clsx(
					'flex-1 p-[5px] resize-none border border-[#c7c7c7ff] outline-[#c7c7c7ff] rounded-[10px] font-sans w-full transition ease-in-out duration-200',
					'hover:border-[#b8b8b8]',
					'md:px-[20px] md:py-[10px]',
				)}
			/>
			<MobileHidden>
				<ReplyButtonStyled onClick={handleSendReply}
				>
					{isReply ? 'reply' : 'send'}
				</ReplyButtonStyled>
			</MobileHidden>|
			<DesktopHidden>
				<footer className="flex items-center justify-between w-full">
					<img
						src={user.image.png}
						alt={user.username}
						title={user.username}
						loading="lazy"
						className="w-[40px] h-[40px] object-cover rounded-[50%]"
					/>
					<ReplyButtonStyled onClick={handleSendReply} >
						{isReply ? 'reply' : 'send'}
					</ReplyButtonStyled>
				</footer>
			</DesktopHidden>
		</div>
	);
}


function ReplyButtonStyled({ children, onClick }: {
	children: ReactNode,
	// eslint-disable-next-line no-unused-vars
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}) {
	return (
		<button onClick={onClick}
						className={clsx(
							'bg-[#5457b6ff] text-white border-none py-[10px] px-[20px] rounded-[5px] cursor-pointer font-bold uppercase transition-all ease-in-out duration-200 w-[90px] flex items-center justify-center text-center',
							'hover:brightness-110',
							'active:brightness-90 active:scale-[0.95]',
							'reply__button'
						)}
		>
			{children}
		</button>
	);
}
