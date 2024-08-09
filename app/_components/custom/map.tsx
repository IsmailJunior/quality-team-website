"use client";
import type { FC } from "react";
import { useMap } from "@/app/_hooks/map.hook";
export const Map: FC = () => {
	const { mapRef } = useMap();
	return <div className="h-[400px] lg:w-[800px]" ref={mapRef} />;
};
