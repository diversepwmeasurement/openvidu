
export interface CaptionModel {

	connectionId: string;
	nickname: string;
	color: string;
	type: 'recognizing' | 'recognized';
	text: string;
}

