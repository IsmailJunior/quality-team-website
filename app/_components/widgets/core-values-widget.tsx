"use client";
import type { FC } from "react";
import { CoreValues } from "@/app/_components/custom/core-values";

export const CoreValuesWidget: FC = () => {
	return (
		<section className="h-[1200px] lg:h-[600px] edge flex justify-center items-center border-b mb-16 text-white">
			<CoreValues />
		</section>
	);
};
