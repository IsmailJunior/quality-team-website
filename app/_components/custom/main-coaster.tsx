import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";

const i18Namespaces = ["home"];
export const MainCoaster: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<div className="text-white absolute flex flex-col space-y-4 md:space-y-10 bottom-0 left-10 md:left-44">
			<h1 className="text-6xl">{t("mainBanner.headline")}</h1>
			<p className="text-sm w-72 md:w-full">
				{t("mainBanner.description")}
			</p>
		</div>
	);
};
