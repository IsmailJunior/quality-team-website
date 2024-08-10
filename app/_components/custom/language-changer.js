'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@/app/_config/i18nConfig';
export default function LanguageChanger ()
{
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = e =>
	{
		const newLocale = e.target.value;

		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime( date.getTime() + days * 24 * 60 * 60 * 1000 );
		const expires = date.toUTCString();
		document.cookie = `NEXT_LOCALE=${ newLocale };expires=${ expires };path=/`;

		// redirect to the new locale path
		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		)
		{
			router.push( '/' + newLocale + currentPathname );
		} else
		{
			router.push(
				currentPathname.replace( `/${ currentLocale }`, `/${ newLocale }` )
			);
		}

		router.refresh();
	};

	return (
		<div className='w-1/2 overflow-hidden text-lg'>
			<label for="countries" class="block mb-2 font-medium text-gray-900">Select a language</label>
			<select id="countries" onChange={ handleChange } value={ currentLocale } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option value="en">English</option>
				<option value="ar">Arabic</option>
			</select>
		</div>
	);
}