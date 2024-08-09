"use client";
import type { FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSliderController } from "@/app/_hooks/slider-controller.hook";
import { Switcher } from "@/app/_components/custom/service-viewer/desktop/switcher";
import { Profile } from "@/app/_components/custom/service-viewer/desktop/profile";
import { Biography } from "@/app/_components/custom/service-viewer/desktop/biography";

export const ServiceViewer: FC = () => {
	const {
		onChevronClick,
		onProfileClick,
		elements,
		currentProfile,
		onMouseOver,
	} = useSliderController();
	return (
		<div className="container flex flex-col pt-24 h-[750px] justify-center space-y-20 w-full max-w-6xl">
			<div className="flex flex-row justify-between space-x-20 mx-auto w-screen max-w-4xl">
				<div
					onMouseEnter={() => {
						onMouseOver(true);
					}}
					onMouseLeave={() => {
						onMouseOver(false);
					}}
					className="flex text-white space-y-6 flex-col items-center w-full z-10"
				>
					<button onClick={onChevronClick}>
						<ChevronUp size={30} />
					</button>
					<Switcher
						data={elements}
						onValueFromChild={async element =>
							onProfileClick(element)
						}
						currentProfile={currentProfile}
					/>
					<button>
						<ChevronDown size={30} onClick={onChevronClick} />
					</button>
				</div>
				<Biography
					title={currentProfile?.title}
					description={currentProfile?.description}
				/>
				<div className="relative">
					<Profile image={currentProfile?.picture!} />
				</div>
			</div>
		</div>
	);
};
