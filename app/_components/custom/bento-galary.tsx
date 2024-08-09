import type { FC } from "react";
import type { bentoGalaryType } from "@/app/_types/about-us-page.type";
import Image from "next/image";
import { Ear } from "lucide-react";
import { BentoCard, BentoGrid } from "@/app/_components/magicui/bento-grid";
import { BEHIND_THE_SCENE } from "@/app/_constants/bento";

export const BentoGalary: FC = () => {
	const bentoElements: bentoGalaryType[] = [
		{
			Icon: Ear,
			name: "Notifications",
			description: "Get notified when something happens.",
			href: "#",
			cta: "Learn more",
			className: "col-span-3 lg:col-span-1 bg-zinc-950",
			background: (
				<Image
					width={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA.width}
					height={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA.height}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA}
					alt="Test"
					className="absolute [--duration:20s]"
				/>
			),
		},
		{
			Icon: Ear,
			name: "Notifications",
			description: "Get notified when something happens.",
			href: "#",
			cta: "Learn more",
			className: "col-span-3 lg:col-span-2",
			background: (
				<Image
					width={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL.width}
					height={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL.height}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL}
					alt="Test"
					className="absolute [--duration:20s] bg-zinc-950"
				/>
			),
		},
		{
			Icon: Ear,
			name: "Notifications",
			description: "Get notified when something happens.",
			href: "#",
			cta: "Learn more",
			className: "col-span-3 lg:col-span-2",
			background: (
				<Image
					width={
						BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_SCREEN.width
					}
					height={
						BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_SCREEN.height
					}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_SCREEN}
					alt="Test"
					className="absolute [--duration:20s] bg-zinc-950"
				/>
			),
		},
		{
			Icon: Ear,
			name: "Notifications",
			description: "Get notified when something happens.",
			href: "#",
			cta: "Learn more",
			className: "col-span-3 lg:col-span-1",
			background: (
				<Image
					width={
						BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_MAN_DOB.width
					}
					height={
						BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_MAN_DOB.height
					}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA_MAN_DOB}
					alt="Test"
					className="absolute [--duration:20s] bg-zinc-950"
				/>
			),
		},
	];
	return (
		<BentoGrid>
			{bentoElements.map((element, index) => (
				<BentoCard key={index} {...element} />
			))}
		</BentoGrid>
	);
};
