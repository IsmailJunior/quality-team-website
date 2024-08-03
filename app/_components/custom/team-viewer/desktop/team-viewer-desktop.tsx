"use client";
import type { FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSliderController } from "@/app/_hooks/slider-controller.hook";
import { Particles } from "@/app/_components/magicui/particles";
import { Switcher } from "@/app/_components/custom/team-viewer/desktop/switcher";
import { Profile } from "@/app/_components/custom/team-viewer/desktop/profile";
import { Biography } from "@/app/_components/custom/team-viewer/desktop/biography";

export const TeamViewer: FC = () => {
	const {
		onChevronClick,
		onProfileClick,
		elements,
		currentProfile,
		onMouseOver,
	} = useSliderController();
	return (
		<div className="container flex flex-col pt-24 h-[750px] justify-center space-y-20 w-full max-w-6xl">
			<div className="flex flex-row justify-between space-x-20 mx-auto w-screen max-w-5xl">
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
					<Particles
						className="absolute glow inset-0"
						quantity={300}
						ease={80}
						color="#9736cf"
						size={0.9}
						vx={0.1}
						vy={-0.1}
						refresh
					/>

					<Profile image={currentProfile?.picture!} />
				</div>
			</div>
		</div>
	);
};
