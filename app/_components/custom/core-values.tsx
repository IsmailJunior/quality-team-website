"use client";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useValues } from "@/app/_hooks/values.hooks";
import { Value } from "@/app/_components/custom/value";

export const CoreValues: FC = () => {
	const { t } = useTranslation();
	const { values } = useValues();
	return (
		<div className="space-y-20 flex flex-col justify-center items-center">
			<h1 className="lg:text-4xl">
				{t("common:widgets.core_values.headline")}
			</h1>
			<div className="flex flex-col lg:flex-row  lg:items-center">
				{values.map(element => (
					<div key={element.id}>
						<Value
							Icon={element.Icon}
							headline={element.headline}
							description={element.description}
							id={element.id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
