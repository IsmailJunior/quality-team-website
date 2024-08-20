import type { FC } from "react";
import { CTAFindMore } from "@/app/_components/custom/cta-find-more";
export const FindMore: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section className="bg-white">
			<CTAFindMore locale={locale} />
		</section>
	);
};
