"use client";
import type { FC } from "react";
import { DotGroup } from "pure-react-carousel";
import { cn } from "@/app/lib/utils";

type carouselIndicatorType = {
	items: number;
};

export const CarouselIndicator: FC<carouselIndicatorType> = ({ items }) => {
	return (
		<DotGroup
			dotNumbers
			className="flex absolute left-1/2 -translate-x-1/2 mt-2"
			renderDots={({ currentSlide }) => {
				{
					return Array.from({ length: items }).map((_, index) => (
						<span
							key={index}
							className={cn(
								"h-2 w-2 rounded-full rtl:ml-2 ltr:mr-2",
								currentSlide === index
									? "bg-black"
									: "bg-slate-400"
							)}
						/>
					));
				}
			}}
		/>
	);
};
