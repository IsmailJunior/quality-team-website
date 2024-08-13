"use client";
import type { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Blend, Aperture, Flower, Brush } from "lucide-react";
import type { bentoGalaryType } from "@/app/_types/about-us-page";
import { BentoCard, BentoGrid } from "@/app/_components/magicui/bento-grid";
import { BEHIND_THE_SCENE } from "@/app/_constants/bento";

export const BentoGalary: FC = () => {
	const { t } = useTranslation();
	const bentoElements: bentoGalaryType[] = [
		{
			Icon: Aperture,
			name: t("common:widgets.behind_the_scene.gadget.title"),
			description: t(
				"common:widgets.behind_the_scene.gadget.description"
			),
			href: "https://www.facebook.com/profile.php?id=61551994790268",
			cta: t("common:widgets.behind_the_scene.gadget.cta"),
			className: "col-span-3 lg:col-span-1 bg-zinc-950",
			background: (
				<Image
					unoptimized
					width={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA.width}
					height={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA.height}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_CAMERA}
					alt="Photo"
					className="absolute [--duration:20s]"
				/>
			),
		},
		{
			Icon: Brush,
			name: t("common:widgets.behind_the_scene.makeup.title"),
			description: t(
				"common:widgets.behind_the_scene.gadget.description"
			),
			href: "https://www.facebook.com/profile.php?id=61551994790268",
			cta: t("common:widgets.behind_the_scene.gadget.cta"),
			className: "col-span-3 lg:col-span-2",
			background: (
				<Image
					unoptimized
					width={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL.width}
					height={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL.height}
					src={BEHIND_THE_SCENE.BEHIND_THE_SCENE_GIRL}
					alt="Photo"
					className="absolute [--duration:20s] bg-zinc-950"
				/>
			),
		},
		{
			Icon: Blend,
			name: t("common:widgets.behind_the_scene.photography.title"),
			description: t(
				"common:widgets.behind_the_scene.photography.description"
			),
			href: "https://www.facebook.com/profile.php?id=61551994790268",
			cta: t("common:widgets.behind_the_scene.photography.cta"),
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
					alt="Photo"
					className="absolute [--duration:20s] bg-zinc-950"
				/>
			),
		},
		{
			Icon: Flower,
			name: t("common:widgets.behind_the_scene.envierement.title"),
			description: t(
				"common:widgets.behind_the_scene.envierement.description"
			),
			href: "https://www.facebook.com/profile.php?id=61551994790268",
			cta: t("common:widgets.behind_the_scene.envierement.cta"),
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
					alt="Photo"
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
