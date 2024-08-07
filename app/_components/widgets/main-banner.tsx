import type { FC } from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/app/_components/custom/hero"), {
	ssr: false,
});

export const MainBanner: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="relative h-[300px] lg:h-[720px] flex mt-12">
			<Hero />
		</section>
	);
};
