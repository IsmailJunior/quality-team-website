'use client';
import type { elementType } from '@/app/_types/home-page';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PenTool, ClipboardPen, Clapperboard, BadgeDollarSign} from 'lucide-react';
import { SERVICES } from '@/app/_constants/services';

export const useServices = () =>
{
	const { t } = useTranslation();
	const DATA: elementType[] = [
		{
			id: 1,
			pos: 1,
			active: true,
			thumnail: PenTool,
			picture: SERVICES.graphic_design.picture.src,
			title: t("services.service.graphic_design.title"),
			description: t("services.service.graphic_design.description"),
		},
		{
			id: 2,
			pos: 2,
			active: true,
			thumnail: ClipboardPen,
			picture: SERVICES.content_creation.picture.src,
			title: t("services.service.content_creation.title"),
			description: t("services.service.content_creation.description"),
		},
		{
			id: 3,
			pos: 3,
			active: true,
			thumnail: Clapperboard,
			picture: SERVICES.video_editing.picture.src,
			title: t("services.service.video_editing.title"),
			description: t("services.service.video_editing.description"),
		},
		{
			id: 4,
			pos: 4,
			active: true,
			thumnail: BadgeDollarSign,
			picture: SERVICES.marketing.picture.src,
			title: t("services.service.marketing.title"),
			description: t("services.service.marketing.description"),
		},
	];
	const [ elements, setElements ] = useState<elementType[]>( DATA );
	const [ currentProfile, setCurrentProfile ] = useState( elements.at( 1 ) );
	return {
		elements,
		setElements,
		currentProfile,
		setCurrentProfile,
	}
}