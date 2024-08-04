import type { FC } from "react";
import { MainCarosuel } from "@/app/_components/custom/carosuel/main-carosuel";
import { MainCoaster } from "@/app/_components/custom/main-coaster";
import { MAIN_BANNER_IMAGES } from "@/app/_constants/carosuelImages";
export const MainBanner: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="relative flex mt-44 h-[720px]">
			<MainCarosuel data={MAIN_BANNER_IMAGES} />
			<MainCoaster locale={locale} />
		</section>
	);
};
