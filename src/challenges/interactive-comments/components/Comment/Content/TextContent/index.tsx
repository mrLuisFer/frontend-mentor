import {
	type FormEvent,
	useRef,
	useState,
	type KeyboardEvent,
	type Dispatch,
	type SetStateAction,
	useMemo,
} from 'react';
import type { Comment } from '../../../../types/index.types.js';
import { clsx } from 'clsx';

interface TextContentProps {
	comment: Comment;
	// eslint-disable-next-line no-unused-vars
	handleUpdatedContent: (editedContent: string) => void;
	isEditing: boolean;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export default function TextContent({
																			comment,
																			handleUpdatedContent,
																			isEditing,
																			setIsEditing,
																		}: TextContentProps) {
	const formRef = useRef<HTMLFormElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const [editedContent, setEditedContent] = useState<string>(comment.content);
	const hasEditedContent = useMemo(() => !!editedContent.length, [editedContent]);

	const handleChangeValue = (editedContent: string) => {
		setEditedContent(editedContent);
	};

	const handleSubmitForm = (event: FormEvent) => {
		event.preventDefault();
	};

	const handleOnKeyEnterDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = event.key === 'Enter' || event.code === 'Enter' || event.keyCode === 13;
		if (isEnterPressed && !event.shiftKey) {
			const textareaValue = textareaRef?.current?.value;
			if (!textareaValue) return;
			handleUpdatedContent(textareaValue);
			textareaRef?.current?.blur();
			setIsEditing(false);
		}
	};

	return (
		<div className="text-sm text-[hsl(211,10%,45%)] mb-[10px] leading-6 flex flex-col gap-2.5">
			{isEditing ? (
				<form onSubmit={handleSubmitForm} className="flex flex-col gap-2.5" ref={formRef}>
					<textarea
						value={editedContent}
						onChange={({ target: { value } }) => handleChangeValue(value)}
						className="resize-none mt-1 p-2"
						rows={5}
						onKeyDown={handleOnKeyEnterDown}
						ref={textareaRef}
					/>
					<button
						className={`${hasEditedContent ? 'bg-[hsl(238,_40%,_52%)] text-white filter hover:brightness-110 hover:shadow active:scale-90' : 'bg-slate-200 cursor-not-allowed'} p-1 px-2 rounded-md transition`}
						style={{ marginLeft: 'auto' }}
						onClick={() => handleUpdatedContent(editedContent)}
						type="submit"
						disabled={!hasEditedContent}
					>
						Update
					</button>
				</form>
			) : (
				<p className={clsx(
					'text-[hsl(238,40%,52%)] font-semibold transition-all ease-in-out duration-200',
					'hover:underline hover:cursor-pointer hover:brightness-[1.2]',
				)}>
					{comment?.replyingTo ? (
						<span className="text-blue-600">@{comment?.replyingTo} </span>
					) : null}
					{comment.content}
				</p>
			)}
		</div>
	);
}
