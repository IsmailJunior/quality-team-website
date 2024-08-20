"use client";
import type { FC } from "react";
import Image from "next/image";
import Marquee from "@/app/_components/magicui/marquee";
import { FIRST } from "@/app/_constants/logos";

const firstRow = FIRST.slice(0, FIRST.length / 2);
const secondRow = FIRST.slice(FIRST.length / 2);

export const Parteners: FC = () => {
	return (
		<div className="relative flex h-[500px] overflow-hidden w-full flex-col items-center justify-center bg-background md:shadow-xl">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((logo, index) => (
					<div className="h-36 w-56 relative" key={index}>
						<Image
							src={logo.src}
							fill
							className="object-contain"
							alt="Parteners logos"
						/>
					</div>
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((logo, index) => (
					<div className="h-36 w-56 relative" key={index}>
						<Image
							src={logo.src}
							fill
							className="object-contain"
							alt="Parteners logos"
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
};
