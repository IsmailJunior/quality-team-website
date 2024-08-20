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
		<div className="relative h-36 w-44 edge scrollbar-hide overflow-y-hidden overflow-x-auto md:overflow-y-auto md:h-[430px]">
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
								"bg-no-repeat bg-center bg-cover grayscale transition-all duration-300 rounded-full min-h-10 min-w-10 h-20 w-20 cursor-pointer",
								currentProfile === element
									? "scale-125 grayscale-0 outline outline-offset-8 outline-1 outline-white"
									: "scale-100 opacity-35"
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
