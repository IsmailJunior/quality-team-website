"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
export const MainCoaster: FC = () => {
	const { t } = useTranslation();
	return (
		<div className="text-white absolute flex flex-col space-y-4 md:space-y-10 bottom-0 left-10 md:left-44">
			<h1 className="text-5xl lg:text-6xl">
				{t("common:carosuel.headline")}
			</h1>
			<p className=" w-72 md:w-full">
				{t("common:carosuel.description")}
			</p>
		</div>
	);
};
