import type { FC } from "react";
import Marquee from "@/app/_components/magicui/marquee";
import { FIRST } from "@/app/_constants/logos";

const firstRow = FIRST.slice(0, FIRST.length / 2);
const secondRow = FIRST.slice(FIRST.length / 2);

export const Parteners: FC = () => {
	return (
		<div className="relative flex h-[500px] overflow-hidden w-full flex-col items-center justify-center bg-background md:shadow-xl">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((logo, index) => (
					<div
						className="h-28 w-28 edge lg:h-36 lg:w-56 bg-center bg-contain bg-no-repeat"
						key={index}
						style={{ backgroundImage: `url(${logo.src})` }}
					/>
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((logo, index) => (
					<div
						className="h-28 w-28 edge lg:h-36 lg:w-56 bg-center bg-contain bg-no-repeat"
						key={index}
						style={{ backgroundImage: `url(${logo.src})` }}
					/>
				))}
			</Marquee>
		</div>
	);
};
