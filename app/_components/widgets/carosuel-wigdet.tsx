import type { FC } from "react";
import { MainCarosuel } from "@/app/_components/custom/carosuel/main-carosuel";
import { MainCoaster } from "@/app/_components/custom/main-coaster";
import { CAROSUEL } from "@/app/_constants/carosuel";
export const CarosuelWidget: FC = () => {
	return (
		<section className="relative h-[600px] w-full">
			<MainCarosuel data={CAROSUEL} />
			<MainCoaster />
		</section>
	);
};
