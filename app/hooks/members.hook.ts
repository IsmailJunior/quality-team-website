'use client';
import { useState } from 'react';
import type { elementType } from '@/app/types/homePage.types';
import { useTranslation } from 'react-i18next';
import { TEAM } from '@/app/constants/team';

export const useMembers = () =>
{
	const { t } = useTranslation();
	const DATA: elementType[] = [
		{
			id: 1,
			pos: 1,
			active: true,
			thumnail: TEAM.EMILIA_CLARKE.src,
			picture: "",
			title: t("crew.members.emilia_clarke.title"),
			description: t("crew.members.emilia_clarke.description"),
		},
		{
			id: 2,
			pos: 2,
			active: true,
			thumnail: TEAM.KIKOLAJ_COSTER_WALDAU.src,
			picture: "",
			title: t("crew.members.nikolaj_coster.title"),
			description: t("crew.members.nikolaj_coster.description"),
		},
		{
			id: 3,
			pos: 3,
			active: true,
			thumnail: TEAM.KIT_HARINGTON.src,
			picture: "",
			title: t("crew.members.kit_harington.title"),
			description: t("crew.members.kit_harington.description"),
		},
		{
			id: 4,
			pos: 4,
			active: true,
			thumnail: TEAM.PETER_DINKLAGE.src,
			picture: "",
			title: t("crew.members.peter_dinklage.title"),
			description: t("crew.members.peter_dinklage.description"),
		},
		{
			id: 5,
			pos: 5,
			active: true,
			thumnail: TEAM.SOPHIE_TURNER.src,
			picture: "",
			title: t("crew.members.sophie_turner.title"),
			description: t("crew.members.sophie_turner.description"),
		},
		{
			id: 6,
			pos: 6,
			active: true,
			thumnail: TEAM.IAIN_GLEN.src,
			picture: "",
			title: t("crew.members.iain_glen.title"),
			description: t("crew.members.iain_glen.description"),
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