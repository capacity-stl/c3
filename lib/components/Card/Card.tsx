import { cn } from '@utils/cn'
import { CardProps, cardVariants } from './Card.props'
import { borderProps } from '@props/border.props'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'
import { borderRadiusProps } from '@props/borderradius.props'

const Card = ({
  className,
  children,
  p = '4',
  borderRadius = 'medium',
  hoverEffect = false,
  bgColor = null,
  onClick,
  ...cardProps
}: CardProps) => {
  return (
    <div
      className={cn(
        cardVariants({ ...cardProps }),
        className,
        borderRadiusProps.borderRadius[borderRadius ?? 'medium'],
        `border ${borderProps.border.default} p-${p} flex flex-col overflow-hidden`,
        hoverEffect ? `hover:border-meteor-300` : '',
        onClick ? `cursor-pointer select-none` : '',
        bgColor ? `bg-${bgColor}` : '',
      )}
      onClick={onClick}
      data-testid="card-component"
      tabIndex={0}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      role={onClick ? 'button' : 'article'}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export { Card }
