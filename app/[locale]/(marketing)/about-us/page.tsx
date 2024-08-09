import type { NextPage } from "next";
import { ContactUsWidget } from "@/app/_components/widgets/contact-us-widget";
import { CarosuelWidget } from "@/app/_components/widgets/carosuel-wigdet";
const AboutUs: NextPage = () => {
	return (
		<div>
			<CarosuelWidget />
			<ContactUsWidget />
		</div>
	);
};

export default AboutUs;
