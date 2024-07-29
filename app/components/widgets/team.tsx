import type { FC } from "react";
import { TeamViewer } from "@/app/components/custom/team-viewer/team-viewer";

export const Team: FC = () => {
	return (
		<section className="h-[750px] flex items-center bg-zinc-900">
			<TeamViewer />
		</section>
	);
};
