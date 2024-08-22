import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";
import { BentoGalary } from "@/app/_components/custom/bento-galary";

const i18Namespaces = ["common"];

export const BentoGalaryWidget: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<section className="h-full lg:h-[700px] mt-28 lg:px-16 lg:container text-white">
			<h1 className="text-xl font-semibold text-center lg:text-start lg:text-5xl mb-16">
				{t("common:widgets.behind_the_scene.headline")}
			</h1>
			<BentoGalary locale={locale} />
		</section>
	);
};
