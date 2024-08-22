import type { FC } from "react";
import initTranslations from "@/app/_config/i18n";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { CTA_IMAGES } from "@/app/_constants/cta";
const i18Namespaces = ["common"];

export const CTAFindMore: FC<{ locale: any }> = async ({ locale }) => {
	const { t } = await initTranslations(locale, i18Namespaces);
	return (
		<div className="flex items-center text-center lg:text-start justify-between w-full h-full overflow-hidden relative">
			<div className="flex-1 absolute lg:relative w-full h-full">
				<Image
					className="saturate-50 object-cover lg:saturate-100 "
					src={CTA_IMAGES.BEHIND_THE_SCENE_TWO_CAMERA_MEN}
					fill
					alt="Student study on tablet late night"
				/>
			</div>
			<div className="flex flex-2 mx-auto lg:mx-0 font-bold items-center justify-center lg:items-start lg:w-1/3 h-full text-slate-200 lg:text-zinc-950 lg:bg-white flex-col px-5 space-y-5 z-10 lg:z-auto">
				<h1>{t("common:widgets.main_cta.label")}</h1>
				<h1 className="lg:text-4xl">
					{t("common:widgets.second_cta.title")}
				</h1>
				<Link
					href="/about-us"
					className="w-fit mx-auto lg:mx-0"
					title="Learn More"
				>
					<Button variant="outline" name="learn_more">
						{t("common:widgets.second_cta.description")}
					</Button>
				</Link>
			</div>
		</div>
	);
};
