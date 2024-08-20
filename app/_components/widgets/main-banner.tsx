import type { FC } from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/app/_components/custom/hero"), {
	ssr: false,
});

export const MainBanner: FC = () => {
	return (
		<section className="relative h-[300px] lg:h-[695px] overflow-hidden flex mt-12">
			<Hero />
		</section>
	);
};
