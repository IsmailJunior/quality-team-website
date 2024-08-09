"use client";
import type { FC } from "react";
import type { carouselIndicatorType } from "@/app/_types/home-page.type";
import { DotGroup } from "pure-react-carousel";
import { cn } from "@/app/_lib/utils";

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
									? "bg-white"
									: "bg-slate-400"
							)}
						/>
					));
				}
			}}
		/>
	);
};
