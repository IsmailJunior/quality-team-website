"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { FOOTER_BACKGROUND } from "@/app/_constants/footer";
export const Footer: FC = () => {
	const { t } = useTranslation();
	return (
		<footer
			className="h-[500px] mt-16 bg-center bg-cover bg-no-repeat text-white"
			style={{ backgroundImage: `url(${FOOTER_BACKGROUND.src})` }}
		>
			<section className="lg:mx-24 space-y-12">
				<h1 className="text-xl">{t("common:footer.about_us.title")}</h1>
				<p className="text-xs lg:text-lg">
					{t("common:footer.about_us.description")}
				</p>
			</section>
		</footer>
	);
};
