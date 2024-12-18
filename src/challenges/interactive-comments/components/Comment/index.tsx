import Likes from './Likes';
import Content from './Content';
import Reply from '../Reply';
import type { AsComment, Comment as CommentType } from '../../types/index.types.ts';
import { useState } from 'react';
import { ReplyContext } from '../../context/ReplyContext';
import { clsx } from 'clsx';

export default function Comment({ as, comment }: { as: AsComment; comment: CommentType }) {
	const [isReplying, setIsReplying] = useState(false);

	return (
		<ReplyContext.Provider
			value={{
				isReplying,
				setIsReplying,
			}}
		>
			<li
				className={clsx(
					'flex items-start gap-[15px] bg-white border-[1px] border-[#fafafa] transition-all ease-in-out duration-200 p-[10px] max-w-[290px] rounded-[10px] w-full',
					{
						'max-w-[330px]': as === 'comment',
						'max-w-[290px]': as !== 'comment',
					},
					'hover:shadow-[1px_1px_2px_1px_var(--comments-light-gray)] hover:border-[#ccc]',
				)}
			>
				<Likes comment={comment} as={as} />
				<Content as={as} comment={comment} />
			</li>

			{isReplying && (
				<div className="flex-1 flex w-full items-end flex-col gap-4 relative replies">
					<Reply as="replies" comment={comment} />
				</div>
			)}
		</ReplyContext.Provider>
	);
}
