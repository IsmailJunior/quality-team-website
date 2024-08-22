import type { FC } from "react";
import type { biographyType } from "@/app/_types/home-page";

export const Biography: FC<biographyType> = ({ title, description }) => {
	return (
		<div className="space-y-4 text-white my-auto w-[1680px]">
			<h1 className="lg:text-xl font-semibold">{title}</h1>
			<p className=" font-thin leading-2">{description}</p>
		</div>
	);
};
