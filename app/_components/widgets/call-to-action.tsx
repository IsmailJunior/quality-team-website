import type { FC } from "react";
import { CTA } from "@/app/_components/custom/cta";

export const CallToAction: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="w-screen h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center lg:bg-white">
			<CTA locale={locale} />
		</section>
	);
};
