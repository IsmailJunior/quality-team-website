import type { FC } from "react";
import { CTAFindMore } from "@/app/_components/custom/cta-find-more";

export const FindMore: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="w-screen h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center lg:bg-white">
			<CTAFindMore locale={locale} />
		</section>
	);
};
