import { challengesComponentRender } from '@/constants/challengesComponentRender';

type ChallengeRenderProps = {
	challengeName: string
}
export default function ChallengeRender({ challengeName }: ChallengeRenderProps) {
	if (!challengeName || !challengesComponentRender[challengeName]) return (
		<div>
			{/*TODO: work on an beauty 404 challenge*/}
			Challenge not found!
		</div>
	);

	console.log({ challengeName });
	const ChallengeComponent = challengesComponentRender[challengeName];
	return <ChallengeComponent />;
}
