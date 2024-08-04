import type { FC } from "react";
import { Slider } from "@/app/_components/custom/slider/slider";
import { TEXTURE } from "@/app/_constants/showcase";
export const Showcase: FC = () => {
	return (
		<section
			className="relative h-[720px] bg-center bg-cover bg-no-repeat"
			style={{ backgroundImage: `url(${TEXTURE.src})` }}
		>
			<Slider />
		</section>
	);
};
