import { CommentsProvider } from './context/CommentsContext';
import CommentsSection from './components/CommentsSection';
import Reply from './components/Reply';
import { useCommentsStore } from './store/commentsStore';
import { clsx } from 'clsx';


function InteractiveComments() {
	const { comments } = useCommentsStore();
	return (
		<CommentsProvider>
			<div className={clsx(
				'bg-[rgb(222,222,222)] flex justify-center items-center min-h-screen',
				'font-[var(--comments-font-family)] pt-[30px] pb-[30px] flex-col',
				'md:min-w-screen md:pt-[50px]',
			)}>
				<ul className={clsx(
					'flex flex-col items-center list-none m-0 p-0 gap-[10px]',
					'md:gap-[15px]',
				)}>
					{comments &&
						comments?.map((comment) => <CommentsSection comment={comment} key={comment.id} />)}
				</ul>
				<Reply />
			</div>
		</CommentsProvider>
	);
}

export default InteractiveComments;
