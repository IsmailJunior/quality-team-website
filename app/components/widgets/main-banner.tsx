import type { FC } from "react";
import { MainCarosuel } from "@/app/components/custom/main-carosuel";
import { MainCoaster } from "@/app/components/custom/main-coaster";

export const MainBanner: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="relative flex h-[500px]">
			<MainCarosuel />
			<MainCoaster locale={locale} />
		</section>
	);
};
