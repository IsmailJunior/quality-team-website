"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { CTA_IMAGES } from "@/app/_constants/cta";
export const CTA: FC = () => {
	const { t } = useTranslation();
	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex flex-col mx-auto px-5 space-y-5">
				<h1>{t("common:widgets.main_cta.label")}</h1>
				<h1 className="text-4xl">
					{t("common:widgets.main_cta.title")}
				</h1>
				<Button size="lg" variant="outline">
					{t("common:widgets.main_cta.description")}
				</Button>
			</div>
			<Image
				className="hidden lg:block"
				src={CTA_IMAGES.STUDENT_ON_TABLET}
				width={900}
				height={900}
				alt="Singer"
			/>
		</div>
	);
};
