import * as React from 'react'
interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  children?: never
  color?: string
  size?: number | string
  name: string
}
declare const ThickCheckIcon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>
declare const ChevronDownIcon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>
declare const AiIcon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>
declare const ArrowRightIcon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>
export { ChevronDownIcon, ThickCheckIcon, AiIcon, ArrowRightIcon }
