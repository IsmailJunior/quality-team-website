"use client";
import type { FC, ReactNode } from "react";
import { TranslationsProvider } from "@/app/providers/translations-provider";
type providersType = {
	children: ReactNode;
	locale: string;
	namespaces: any;
	resources: any;
};

export const Providers: FC<providersType> = ({
	children,
	locale,
	namespaces,
	resources,
}) => {
	return (
		<TranslationsProvider
			locale={locale}
			namespaces={namespaces}
			resources={resources}
		>
			{children}
		</TranslationsProvider>
	);
};
