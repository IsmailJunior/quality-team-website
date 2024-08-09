import type { FC } from "react";
import { ContactUs } from "@/app/_components/custom/contact-us";

export const ContactUsWidget: FC = () => {
	return (
		<section className="container mt-44 py-12 space-y-12">
			<h1 className="text-3xl text-center text-white font-semibold lg:text-start lg:text-5xl">
				Contact Us:
			</h1>
			<ContactUs />
		</section>
	);
};
