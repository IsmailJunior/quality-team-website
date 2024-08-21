import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import initTranslations from "@/app/_config/i18n";
import { Button } from "@/app/_components/ui/button";
import { CTA_IMAGES } from "@/app/_constants/cta";

const i18Namespaces = ["common"];

export const CTAFindMore: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<div className="flex items-center justify-between w-full py-28 lg:py-0">
			<Image
				className="hidden lg:block"
				src={CTA_IMAGES.BEHIND_THE_SCENE_TWO_CAMERA_MEN}
				width={800}
				height={800}
				alt="Two camera men holding a big camera"
			/>
			<div className="flex flex-col justify-center items-center mx-auto lg:items-start lg:mx-0 px-5 space-y-5">
				<h1 className="lg:text-4xl text-center lg:text-start">
					{t("common:widgets.second_cta.title")}
				</h1>
				<Link href="/about-us" title="Find More">
					<Button variant="outline" name="find_more">
						{t("common:widgets.second_cta.description")}
					</Button>
				</Link>
			</div>
		</div>
	);
};
