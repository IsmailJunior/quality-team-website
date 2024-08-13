"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Parteners } from "@/app/_components/custom/parteners";

export const PartenersWidget: FC = () => {
	const { t } = useTranslation();
	return (
		<section className="h-[500px] text-white text-center mb-56">
			<h1 className="text-6xl mb-6">
				{t("common:widgets.parteners.headline")}
			</h1>
			<Parteners />
		</section>
	);
};
