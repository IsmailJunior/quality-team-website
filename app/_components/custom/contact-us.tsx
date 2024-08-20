import type { FC } from "react";
import { Map } from "@/app/_components/custom/map";
import { ContactForm } from "@/app/_components/custom/contact-form";
export const ContactUs: FC<{ locale: any }> = ({ locale }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4">
			<ContactForm />
			<Map locale={locale} />
		</div>
	);
};
