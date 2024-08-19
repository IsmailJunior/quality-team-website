import type { NextPage } from "next";
import { ContactUsWidget } from "@/app/_components/widgets/contact-us-widget";
import { AboutUsHeroWidget } from "@/app/_components/widgets/about-us-hero";
const AboutUs: NextPage = () => {
	return (
		<div>
			<AboutUsHeroWidget />
			<ContactUsWidget />
		</div>
	);
};

export default AboutUs;
