'use client';
import { useTranslation } from 'react-i18next';
import { LifeBuoy, EyeIcon, Clapperboard, DraftingCompass, ChartPie} from 'lucide-react';
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
			Icon: LifeBuoy,
			headline: t('common:widgets.core_values.core_values.support.title'),
			description: t('common:widgets.core_values.core_values.support.description')
		},
		{
			id: 3,
			Icon: DraftingCompass,
			headline: t('common:widgets.core_values.core_values.brand.title'),
			description: t('common:widgets.core_values.core_values.brand.description'),
		},
		{
			id: 4,
			Icon: ChartPie,
			headline:  t('common:widgets.core_values.core_values.marketing.title'),
			description:  t('common:widgets.core_values.core_values.marketing.description'),
		},
		{
			id: 5,
			Icon: EyeIcon,
			headline:  t('common:widgets.core_values.core_values.accuracy.title'),
			description:  t('common:widgets.core_values.core_values.accuracy.description'),
		},
	];
	return {
		values,
	}
}