import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";
import { Parteners } from "@/app/_components/custom/parteners";

const i18Namespaces = ["common"];

export const PartenersWidget: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<section className="h-[500px] text-white text-center mb-56">
			<h1 className="text-2xl lg:text-6xl mb-6">
				{t("common:widgets.parteners.headline")}
			</h1>
			<Parteners />
		</section>
	);
};
