import type { FC } from "react";
import { MainCarosuel } from "@/app/components/custom/carosuel/main-carosuel";
import { MainCoaster } from "@/app/components/custom/main-coaster";

export const MainBanner: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="relative flex h-[720px]">
			<MainCarosuel />
			<MainCoaster locale={locale} />
		</section>
	);
};
