"use client";
import type { FC } from "react";
import { cn } from "@/app/lib/utils";

type elementType = {
	id: number;
	pos: number;
	active: boolean;
	thumnail: string;
	picture: string;
	title: string;
	description: string;
};
type dataType = {
	data: elementType[];
	currentProfile: elementType | undefined;
	onValueFromChild: (profile: elementType) => {};
};

export const Switcher: FC<dataType> = ({
	data,
	currentProfile,
	onValueFromChild,
}) => {
	const sendValueToParent = (profile: elementType) => {
		onValueFromChild(profile);
	};
	return (
		<div className="relative h-36 w-full scrollbar-hide overflow-y-hidden overflow-x-auto md:overflow-y-auto md:h-[430px]">
			<div className="flex absolute left-1/2 -translate-x-1/2 md:flex-col md:space-y-6">
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
								"bg-no-repeat bg-center bg-cover my-12 grayscale transition-all duration-300 rounded-full h-20 w-28 min-h-10 min-w-10 md:my-0 md:h-24 md:w-24 cursor-pointer",
								currentProfile === element
									? "border-2 scale-125 grayscale-0 border-cyan-700"
									: "border-0 scale-100"
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
