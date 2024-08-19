"use client";
import type { FC } from "react";
import { BEHIND_THE_SCENE_GROUP_PHOTO } from "@/app/_constants/about-us";
export const AboutUsHero: FC = () => {
	return (
		<div
			className="h-full w-full bg-top bg-cover bg-no-repeat grayscale"
			style={{
				backgroundImage: `url(${BEHIND_THE_SCENE_GROUP_PHOTO.src})`,
			}}
		></div>
	);
};
