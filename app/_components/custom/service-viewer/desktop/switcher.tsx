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
		<div className="relative h-36 border w-44 edge scrollbar-hide overflow-y-hidden overflow-x-auto md:overflow-y-auto md:h-[400px]">
			<div className="flex absolute left-1/2 -translate-x-1/2 md:flex-col md:space-y-16">
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
								"transition-all duration-500 rounded-full cursor-pointer",
								currentProfile === element
									? "scale-150 opacity-100"
									: "scale-100 opacity-35"
							)}
						/>
					))}
			</div>
		</div>
	);
};
