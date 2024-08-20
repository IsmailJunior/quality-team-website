import type { FC } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
export const Map: FC<{ locale: any }> = ({ locale }) => {
	const address =
		"ابو نؤاس, Baghdad, Baghdad Governorate,مركز البيان للدراسات والتخطيط";
	return (
		<div className="w-full flex-1">
			<GoogleMapsEmbed
				apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
				height={400}
				width="100%"
				q={address}
				mode={"place"}
				zoom="17"
				language={locale}
				region="IQ"
				loading="eager"
			/>
		</div>
	);
};
