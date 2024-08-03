"use client";
import type { FC } from "react";
import type { switcherType, elementType } from "@/app/_types/homePage.type";
import { cn } from "@/app/_lib/utils";

export const Switcher: FC<switcherType> = ({
	data,
	currentProfile,
	onValueFromChild,
}) => {
	const sendValueToParent = (profile: elementType) => {
		onValueFromChild(profile);
	};
	return (
		<div className="relative h-36 w-full edge-horizontal scrollbar-hide overflow-y-hidden overflow-x-auto">
			<div className="flex absolute left-1/2 -translate-x-1/2">
				{data
					.filter(element => element.active === true)
					.sort((a, b) =>
						a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0
					)
					.map(element => (
						<div
							onClick={() => sendValueToParent(element)}
							key={element.id}
							className={cn(
								"bg-no-repeat bg-center bg-cover my-12 grayscale transition-all duration-300 rounded-full h-16 w-16 min-h-10 min-w-10 cursor-pointer",
								currentProfile === element
									? "scale-125 grayscale-0 outline outline-offset-4 outline-1 outline-sky-500 z-10"
									: "scale-100"
							)}
							style={{
								backgroundImage: `url(${element.thumnail})`,
							}}
						/>
					))}
			</div>
		</div>
	);
};
