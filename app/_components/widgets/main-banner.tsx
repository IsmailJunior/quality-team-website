import type { FC } from "react";
import { MainCarosuel } from "@/app/_components/custom/carosuel/main-carosuel";
import { MainCoaster } from "@/app/_components/custom/main-coaster";
export const MainBanner: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="relative flex mt-44 h-[720px]">
			<MainCarosuel />
			<MainCoaster locale={locale} />
		</section>
	);
};
