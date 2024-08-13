"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { BentoGalary } from "@/app/_components/custom/bento-galary";
export const BentoGalaryWidget: FC = () => {
	const { t } = useTranslation();
	return (
		<section className="h-full lg:h-[700px] my-24 lg:px-16 lg:container text-white">
			<h1 className="text-3xl text-center lg:text-start lg:text-5xl font-semibold mb-16">
				{t("common:widgets.behind_the_scene.headline")}
			</h1>
			<BentoGalary />
		</section>
	);
};
