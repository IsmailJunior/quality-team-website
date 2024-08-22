import type { FC } from "react";
import { CoreValues } from "@/app/_components/custom/core-values";

export const CoreValuesWidget: FC = () => {
	return (
		<section className="h-[1000px] lg:h-[600px] edge flex justify-center items-center border-b text-white">
			<CoreValues />
		</section>
	);
};
