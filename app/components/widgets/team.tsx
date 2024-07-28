import type { FC } from "react";
import { TeamViewer } from "@/app/components/custom/team-viewer/team-viewer";

export const Team: FC = () => {
	return (
		<section className="container h-[600px] flex items-center">
			<TeamViewer />
		</section>
	);
};
