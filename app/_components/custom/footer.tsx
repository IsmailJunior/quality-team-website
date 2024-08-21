import type { FC } from "react";
import Link from "next/link";
import initTranslations from "@/app/_config/i18n";
import { FOOTER_BACKGROUND } from "@/app/_constants/footer";
const i18Namespaces = ["common"];

export const Footer: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<footer
			className="h-[500px] mt-16 bg-center bg-cover bg-no-repeat text-white relative"
			style={{ backgroundImage: `url(${FOOTER_BACKGROUND.src})` }}
		>
			<section className="lg:mx-24 space-y-12">
				<h1 className="text-xl">{t("common:footer.about_us.title")}</h1>
				<p className="text-sm lg:text-lg">
					{t("common:footer.about_us.description")}
				</p>
			</section>
			<section className="flex gap-12 lg:mx-24 mt-16 text-slate-300">
				<ul className="flex flex-col gap-6">
					<li>
						<Link
							title="Support"
							target="_blank"
							href="https://qualityteamiq.ladesk.com"
						>
							{t("common:footer.links.support")}
						</Link>
					</li>
					<li>
						<Link href="/about-us#contact" title="Contact">
							{t("common:footer.links.contact")}
						</Link>
					</li>
				</ul>
				<ul className="flex flex-col gap-6">
					<li>
						<Link
							title="Facebook"
							target="_blank"
							href="https://www.facebook.com/profile.php?id=61551994790268"
						>
							{t("common:footer.links.facebook")}
						</Link>
					</li>
					<li>
						<Link
							title="Instagram"
							target="_blank"
							href="https://www.instagram.com/qualityteam.iq/"
						>
							{t("common:footer.links.instagram")}
						</Link>
					</li>
				</ul>
			</section>
			<span className="lg:mx-24 absolute bottom-44">
				{t("common:footer.attr")}
			</span>
		</footer>
	);
};
