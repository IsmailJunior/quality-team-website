"use client";
import type { FC } from "react";
import Image from "next/image";
import { BEHIND_THE_SCENE_GROUP_PHOTO } from "@/app/_constants/about-us";
export const AboutUsHero: FC = () => {
	return (
		<div className="h-full w-full relative grayscale">
			<Image
				src={BEHIND_THE_SCENE_GROUP_PHOTO.src}
				fill
				alt="Behind the scene cast"
				className="object-cover object-top"
				priority
			/>
		</div>
	);
};
