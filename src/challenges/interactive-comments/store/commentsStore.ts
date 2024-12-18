import { create } from "zustand";
// import jsonData from "@/views/Challenges/interactive-comments/data.ts";
import jsonData from "../data";
import type { Comment } from "../types/index.types";

type CommentsStore = {
	comments: Comment[];
	// eslint-disable-next-line no-unused-vars
	setComments: (comments: Comment[]) => void;
	// eslint-disable-next-line no-unused-vars
	addNewComment: (comment: Comment) => void;
};

export const useCommentsStore = create<CommentsStore>()((set) => ({
	comments: jsonData.comments as Comment[],
	setComments: (comments: Comment[]) => {
		set(() => ({ comments: comments }));
	},
	addNewComment: (newComment: Comment) => {
		set((prev) => ({ comments: [...prev.comments, newComment] }));
	},
}));
