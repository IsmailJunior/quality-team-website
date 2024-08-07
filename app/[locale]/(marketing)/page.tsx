import type { NextPage } from "next";
import { MainBanner } from "@/app/_components/widgets/main-banner";
import { Services } from "@/app/_components/widgets/services";
import { Library } from "@/app/_components/widgets/library";

const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<div className="flex flex-col">
			<MainBanner locale={locale} />
			<Services />
			<Library />
		</div>
	);
};

export default Home;
