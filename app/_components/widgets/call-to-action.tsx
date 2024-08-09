import type { FC } from "react";
import { CTA } from "@/app/_components/custom/cta";

export const CallToAction: FC = () => {
	return (
		<section className="w-screen h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center bg-white">
			<CTA />
		</section>
	);
};
