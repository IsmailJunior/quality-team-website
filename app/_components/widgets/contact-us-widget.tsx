import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";
import { ContactUs } from "@/app/_components/custom/contact-us";
const i18Namespaces = ["common"];

export const ContactUsWidget: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);

	return (
		<section id="contact" className="lg:container py-12 space-y-12">
			<h1 className="text-3xl text-center text-white font-semibold lg:text-start lg:text-5xl">
				{t("common:widgets.contact.headline")}
			</h1>
			<ContactUs locale={locale} />
		</section>
	);
};
