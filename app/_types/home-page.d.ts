import { LucideProps } from 'lucide-react';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type elementType = {
	id: number;
	pos: number;
	active: boolean;
	thumnail: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	picture: string;
	title: string;
	description: string;
};

export type biographyType = {
	title: string | undefined;
	description: string | undefined;
};

export type profileType = {
	image: string | StaticImport;
};

export type switcherType = {
	data: elementType[];
	currentProfile: elementType | undefined;
	onValueFromChild: ( profile: elementType ) => {};
};

export type carouselIndicatorType = {
	items: number;
};
export type valueType = {
	id: number;
	headline: string;
	description: string;
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

