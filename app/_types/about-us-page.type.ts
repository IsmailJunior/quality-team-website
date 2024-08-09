import type {ReactNode} from 'react'
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type bentoGalaryType = {
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    name: string,
    description:string,
    className: string,
    href: string,
	cta: string,
	background: ReactNode
}