'use client';
import { useTranslation } from 'react-i18next';
import { ChartPie, EyeIcon, Clapperboard } from 'lucide-react';
import type { valueType } from '@/app/_types/home-page';

export const useValues = () =>
{
	const { t } = useTranslation();
	const values: valueType[] = [
		{
			id: 1,
			Icon: Clapperboard,
			headline: t('common:widgets.core_values.core_values.quality.title'),
			description: t('common:widgets.core_values.core_values.quality.description')
		},
		{
			id: 2,
			Icon: ChartPie,
			headline: t('common:widgets.core_values.core_values.sales.title'),
			description: t('common:widgets.core_values.core_values.sales.description')
		},
		{
			id: 2,
			Icon: EyeIcon,
			headline: 'Grateful',
			description: "I choose to be grateful for this moment because..."
		},
		{
			id: 2,
			Icon: EyeIcon,
			headline: 'Grateful',
			description: "I choose to be grateful for this moment because..."
		},
		{
			id: 2,
			Icon: EyeIcon,
			headline: 'Grateful',
			description: "I choose to be grateful for this moment because..."
		},
	];
	return {
		values,
	}
}