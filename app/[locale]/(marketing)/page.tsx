import type { NextPage } from "next";
import { MainBanner } from "@/app/_components/widgets/main-banner";
import { Services } from "@/app/_components/widgets/services";
import { CallToAction } from "@/app/_components/widgets/call-to-action";
import { CoreValuesWidget } from "@/app/_components/widgets/core-values-widget";
import { FindMore } from "@/app/_components/widgets/find-more";
import { PartenersWidget } from "@/app/_components/widgets/parteners-widget";
import { BentoGalaryWidget } from "@/app/_components/widgets/bento-galary-widget";
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<div className="flex flex-col">
			<MainBanner locale={locale} />
			<Services />
			<CallToAction />
			<CoreValuesWidget />
			<PartenersWidget />
			<FindMore />
			<BentoGalaryWidget />
		</div>
	);
};

export default Home;
