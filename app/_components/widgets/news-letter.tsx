import type { FC } from "react";

export const NewsLetter: FC<{ locale: any }> = ({ locale }) => {
	return (
		<section>
			<iframe
				className="block mt-44 p-6 bg-white"
				data-w-type="embedded"
				scrolling="no"
				src={
					locale === "ar"
						? process.env.NEXT_PUBLIC_MAILJET_ARABIC_TEMPLATE
						: process.env.NEXT_PUBLIC_MAILJET_ENGLISH_TEMPLATE
				}
				width="100%"
				style={{ height: 400 }}
			></iframe>
		</section>
	);
};
