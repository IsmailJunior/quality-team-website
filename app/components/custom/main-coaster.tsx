import type { FC } from "react";
import initTranslations from "@/app/config/i18n";
import { StaticsTicker } from "@/app/components/custom/statics-ticker";

const i18Namespaces = ["home"];
export const MainCoaster: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<div className="text-white absolute flex flex-col space-y-4 md:space-y-10 md:items-center top-1/2 left-1/2 -translate-x-1/2">
			<h1 className="text-6xl">{t("mainBanner.headline")}</h1>
			<div className="flex">
				<StaticsTicker
					value={230}
					label={t("mainBanner.numbers.team")}
				/>
				<StaticsTicker
					value={140}
					label={t("mainBanner.numbers.members")}
				/>
				<StaticsTicker
					value={320}
					label={t("mainBanner.numbers.coffees")}
				/>
			</div>
			<p className="md:text-center text-sm w-72 md:w-full">
				{t("mainBanner.description")}
			</p>
		</div>
	);
};
