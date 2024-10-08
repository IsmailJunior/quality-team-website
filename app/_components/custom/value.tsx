import type { FC } from "react";
import type { valueType } from "@/app/_types/home-page";
export const Value: FC<valueType> = ({ headline, description, Icon }) => {
	return (
		<div className="flex flex-col text-center justify-center items-center p-5 lg:p-3 lg:border space-y-2">
			<Icon size={44} />
			<h1 className="lg:text-xl">{headline}</h1>
			<p className="lg:w-44 text-center text-sm">{description}</p>
		</div>
	);
};
