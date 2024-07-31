"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSliderController } from "@/app/hooks/slider-controller.hook";
import { Particles } from "@/app/components/magicui/particles";
import { Switcher } from "@/app/components/custom/team-viewer/mobile/switcher";
import { Profile } from "@/app/components/custom/team-viewer/mobile/profile";
import { Biography } from "@/app/components/custom/team-viewer/mobile/biography";

export const TeamViewerMobile: FC = () => {
	const { t } = useTranslation();
	const { onProfileClick, elements, currentProfile } = useSliderController();
	return (
		<div
			className="h-[750px] bg-cover bg-no-repeat bg-center flex items-end"
			style={{ backgroundImage: `url(${currentProfile?.thumnail})` }}
		>
			<div className="container flex flex-col items-center space-y-20 mx-auto w-full max-w-4xl">
				<div className="flex flex-col mx-auto w-full max-w-2xl">
					<div className="flex text-white space-y-6 flex-col items-center w-full">
						<Biography
							title={currentProfile?.title}
							description={currentProfile?.description}
						/>
						<Switcher
							data={elements}
							onValueFromChild={async element =>
								onProfileClick(element)
							}
							currentProfile={currentProfile}
						/>
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
					</div>
				</div>
			</div>
		</div>
	);
};
