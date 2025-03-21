import { cn } from '@utils/cn'
import { CardProps, cardVariants } from './Card.props'
import { borderProps } from '@props/border.props'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

const Card = ({ className, children, p = '4', ...cardProps }: CardProps) => {
  return (
    <div
      className={cn(
        cardVariants({ ...cardProps }),
        className,
        `border ${borderProps.border.default} rounded-md p-${p} flex flex-col`,
      )}
      data-testid="card-component"
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export { Card }
