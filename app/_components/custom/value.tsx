import type { FC } from "react";
import type { valueType } from "@/app/_types/home-page";
export const Value: FC<valueType> = ({ headline, description, Icon }) => {
	return (
		<div className="flex flex-col justify-center items-center p-5 lg:border space-y-2">
			<Icon size={44} />
			<h1 className="text-3xl">{headline}</h1>
			<p className="lg:w-44 text-center">{description}</p>
		</div>
	);
};
