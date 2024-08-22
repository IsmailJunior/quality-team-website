import type { FC } from "react";
import type { switcherType, elementType } from "@/app/_types/home-page";
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
			<div className="flex absolute border left-1/2 -translate-x-1/2">
				{data
					.filter(element => element.active === true)
					.sort((a, b) =>
						a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0
					)
					.map(element => (
						<element.thumnail
							strokeWidth={1}
							size={50}
							onClick={() => sendValueToParent(element)}
							key={element.id}
							className={cn(
								"my-12 mx-12 transition-all duration-300 rounded-full cursor-pointer",
								currentProfile === element
									? "scale-150 z-10 opacity-100"
									: "scale-100 opacity-30"
							)}
						/>
					))}
			</div>
		</div>
	);
};
