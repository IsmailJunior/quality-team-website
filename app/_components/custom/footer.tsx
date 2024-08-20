import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";
import { FOOTER_BACKGROUND } from "@/app/_constants/footer";
const i18Namespaces = ["common"];

export const Footer: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<footer
			className="h-[500px] mt-16 bg-center bg-cover bg-no-repeat text-white"
			style={{ backgroundImage: `url(${FOOTER_BACKGROUND.src})` }}
		>
			<section className="lg:mx-24 space-y-12">
				<h1 className="text-xl">{t("common:footer.about_us.title")}</h1>
				<p className="text-sm lg:text-lg">
					{t("common:footer.about_us.description")}
				</p>
			</section>
		</footer>
	);
};
