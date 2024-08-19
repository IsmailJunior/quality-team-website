"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { ContactUs } from "@/app/_components/custom/contact-us";

export const ContactUsWidget: FC = () => {
	const { t } = useTranslation();

	return (
		<section id="contact" className="lg:container py-12 space-y-12">
			<h1 className="text-3xl text-center text-white font-semibold lg:text-start lg:text-5xl">
				{t("common:widgets.contact.headline")}
			</h1>
			<ContactUs />
		</section>
	);
};
