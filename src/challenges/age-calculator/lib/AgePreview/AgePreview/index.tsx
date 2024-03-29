import { NewDate } from '../../../types';
import AgeLabel from '../AgeLabel';
import { AgePreviewStyled } from './AgePreview.styles';

export default function AgePreview({ newDate }: { newDate: NewDate }) {
	return (
		<AgePreviewStyled>
			<AgeLabel label="years" value={newDate.years} />
			<AgeLabel label="months" value={newDate.months} />
			<AgeLabel label="days" value={newDate.days} />
		</AgePreviewStyled>
	);
}
