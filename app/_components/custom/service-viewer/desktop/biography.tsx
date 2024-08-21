import type { FC } from "react";
import type { biographyType } from "@/app/_types/home-page";

export const Biography: FC<biographyType> = ({ title, description }) => {
	return (
		<div className="space-y-4 text-white my-auto text-center">
			<h1 className="lg:text-2xl font-semibold">{title}</h1>
			<p className="font-extralight leading-2">{description}</p>
		</div>
	);
};
