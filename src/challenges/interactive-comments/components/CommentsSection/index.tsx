import Comment from '../Comment';
import type { Comment as CommentType } from '../../types/index.types.ts';
import './styles/comments-section.css';

export default function CommentsSection({ comment }: { comment: CommentType }) {
	return (
		<>
			<Comment key={comment.id} as="comment" comment={comment} />
			<div className="flex-1 flex w-full items-end flex-col gap-4 relative replies">
				{comment.replies &&
					comment?.replies.length > 0 &&
					comment?.replies.map((reply) => <Comment comment={reply} key={reply.id} as="replies" />)}
			</div>
		</>
	);
}
