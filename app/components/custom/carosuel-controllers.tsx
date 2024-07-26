"use client";
import type { FC } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
export const CarosuelControllers: FC = () => {
	const pathname = usePathname();
	return (
		<div className="justify-between px-5 absolute bottom-0 left-1/2 -translate-x-1/2 max-w-7xl w-screen text-white hidden md:flex">
			<ButtonBack>
				{pathname === "/ar" ? (
					<ChevronRight
						className="border rounded-full"
						width={150}
						height={40}
					/>
				) : (
					<ChevronLeft
						className="border rounded-full"
						width={150}
						height={40}
					/>
				)}
			</ButtonBack>
			<ButtonNext>
				{pathname === "/ar" ? (
					<ChevronLeft
						className="border rounded-full"
						width={150}
						height={40}
					/>
				) : (
					<ChevronRight
						className="border rounded-full"
						width={150}
						height={40}
					/>
				)}
			</ButtonNext>
		</div>
	);
};
