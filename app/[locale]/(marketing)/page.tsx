import { Fragment } from "react";
import type { NextPage } from "next";
import { MainBanner } from "@/app/components/widgets/main-banner";
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<Fragment>
			<MainBanner locale={locale} />
		</Fragment>
	);
};

export default Home;
