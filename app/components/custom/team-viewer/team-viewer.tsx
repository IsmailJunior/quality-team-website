"use client";
import type { FC } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSliderController } from "@/app/hooks/slider-controller.hook";
import { Particles } from "@/app/components/magicui/particles";
import { Switcher } from "@/app/components/custom/team-viewer/switcher";
import { Profile } from "@/app/components/custom/team-viewer/profile";
import { Biography } from "@/app/components/custom/team-viewer/biography";

export const TeamViewer: FC = () => {
	const { onChevronClick, onProfileClick, elements, currentProfile } =
		useSliderController();
	return (
		<div className="container flex flex-col items-center space-y-20 mx-auto w-full max-w-4xl">
			<h1 className="text-white text-4xl mt-16">CAST & CREW</h1>
			<div className="flex flex-col-reverse md:flex-row md:justify-between mx-auto w-full max-w-2xl">
				<div className="flex text-white space-y-6 flex-col items-center w-full">
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
				<div className="relative">
					<Particles
						className="absolute glow inset-0"
						quantity={300}
						ease={80}
						color="#0072ff"
						size={0.9}
						vx={0.1}
						vy={-0.1}
						refresh
					/>
					<Profile image={currentProfile?.thumnail} />
					<Biography
						title={currentProfile?.title}
						description={currentProfile?.description}
					/>
				</div>
			</div>
		</div>
	);
};
