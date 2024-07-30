import type { FC } from "react";

type biographyType = {
	title: string | undefined;
	description: string | undefined;
};

export const Biography: FC<biographyType> = ({ title, description }) => {
	return (
		<div className="absolute bottom-0 left-0 space-y-4 text-white">
			<h1 className="text-4xl font-semibold">{title}</h1>
			<p className="font-extralight">{description}</p>
		</div>
	);
};
