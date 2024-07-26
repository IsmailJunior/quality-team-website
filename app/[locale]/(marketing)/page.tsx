import { Fragment } from "react";
import type { NextPage } from "next";
import { MainBanner } from "@/app/components/widgets/main-banner";
import { AboutUs } from "@/app/components/widgets/about-us";
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<Fragment>
			<MainBanner locale={locale} />
			<AboutUs />
		</Fragment>
	);
};

export default Home;
