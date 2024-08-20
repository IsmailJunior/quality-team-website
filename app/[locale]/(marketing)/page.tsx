import type { NextPage } from "next";
import { MainBanner } from "@/app/_components/widgets/main-banner";
import { Services } from "@/app/_components/widgets/services";
import { CallToAction } from "@/app/_components/widgets/call-to-action";
import { CoreValuesWidget } from "@/app/_components/widgets/core-values-widget";
import { FindMore } from "@/app/_components/widgets/find-more";
import { PartenersWidget } from "@/app/_components/widgets/parteners-widget";
import { BentoGalaryWidget } from "@/app/_components/widgets/bento-galary-widget";
import { NewsLetter } from "@/app/_components/widgets/news-letter";
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<div className="flex flex-col">
			<MainBanner />
			<Services />
			<CallToAction locale={locale} />
			<CoreValuesWidget />
			<PartenersWidget locale={locale} />
			<FindMore locale={locale} />
			<BentoGalaryWidget locale={locale} />
			<NewsLetter locale={locale} />
		</div>
	);
};

export default Home;
