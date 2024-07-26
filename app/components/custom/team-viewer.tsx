"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { VerticalCarosuel } from "@/app/components/custom/vertical-carosuel/vertical-carosuel";
import background from "@/public/static/desktop/background.jpeg";
export const TeamViewer: FC = () => {
	const { t } = useTranslation();
	return (
		<section
			className="text-white py-16 space-y-16 flex flex-col items-center bg-cover bg-no-repeat bg-center"
			style={{ backgroundImage: `url(${background.src})` }}
		>
			<h1 className=" text-4xl text-center md:text-start">
				{t("castAndCrew.headline")}
			</h1>
			<VerticalCarosuel />
		</section>
	);
};
