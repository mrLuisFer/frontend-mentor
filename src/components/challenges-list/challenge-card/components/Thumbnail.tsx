import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";

type ThumbnailProps = {
	src: string;
	title: string;
	description: string;
};

export default function ChallengeCardThumbnail({ src, title, description }: ThumbnailProps) {
	const [imgRatio, setImgRatio] = useState(1);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setImgRatio(img.width / img.height); // Calculates and sets the aspect ratio (width/height)
		};
	}, [src]);

	return (
		<div className="w-full p-2">
			<AspectRatio ratio={imgRatio}>
				<img
					src={src}
					alt={title}
					aria-description={description}
					aria-label={title}
					className="w-full object-cover rounded-md motion-reduce:hidden"
					loading="lazy"
					draggable="false"
				/>
			</AspectRatio>
		</div>
	);
}
