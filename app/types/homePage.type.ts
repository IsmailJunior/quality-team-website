export type elementType = {
	id: number;
	pos: number;
	active: boolean;
	thumnail: string;
	picture: string;
	title: string;
	description: string;
};

export type biographyType = {
	title: string | undefined;
	description: string | undefined;
};

export type profileType = {
	image: string | undefined;
};

export type switcherType = {
	data: elementType[];
	currentProfile: elementType | undefined;
	onValueFromChild: ( profile: elementType ) => {};
};

export type carouselIndicatorType = {
	items: number;
};
