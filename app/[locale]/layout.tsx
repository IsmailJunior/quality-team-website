import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { dir } from "i18next";
import initTranslations from "@/app/_config/i18n";
import { i18nConfig } from "@/app/_config/i18nConfig";
import { Providers } from "@/app/_providers/providers";
import { cn } from "@/app/_lib/utils";
import { Toaster } from "@/app/_components/ui/toaster";
import { Navigation } from "@/app/_components/custom/navigation/navigation";
import { Footer } from "@/app/_components/custom/footer";
import "@/app/_styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const i18Namespaces = ["home", "common"];

export const metadata: Metadata = {
	title: "Qaulity Team",
	description: "For marketing.",
};

export function generateStaticParams() {
	return i18nConfig.locales.map((locale: any) => ({ locale }));
}

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: any };
}>) {
	const { resources } = await initTranslations(locale, i18Namespaces);
	return (
		<html lang={locale} dir={dir(locale)}>
			<body
				className={cn(
					"min-h-screen bg-zinc-950 font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers
					resources={resources}
					locale={locale}
					namespaces={i18Namespaces}
				>
					<Navigation />
					<main>{children}</main>
					<Toaster />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
