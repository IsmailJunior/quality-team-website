import type { NextPage, Metadata } from "next";
import { ContactUsWidget } from "@/app/_components/widgets/contact-us-widget";
import { AboutUsHeroWidget } from "@/app/_components/widgets/about-us-hero";

export const metadata: Metadata = {
	title: "Qaulity Team | About us",
	description: "Who we are?",
};

const AboutUs: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<div>
			<AboutUsHeroWidget />
			<ContactUsWidget locale={locale} />
		</div>
	);
};

export default AboutUs;
