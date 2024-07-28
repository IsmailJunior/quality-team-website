import { Fragment } from "react";
import type { NextPage } from "next";
import { MainBanner } from "@/app/components/widgets/main-banner";
import { Team } from "@/app/components/widgets/team";
const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<Fragment>
			<MainBanner locale={locale} />
			<Team />
		</Fragment>
	);
};

export default Home;
