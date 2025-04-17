import { cn } from '@utils/cn'
import { CardBodyProps, cardVariants } from './Card.props'

const CardBody = ({ className, children, ...cardProps }: CardBodyProps) => {
  return (
    <div
      className={cn(
        cardVariants({ ...cardProps }),
        className,
        `text-meteor-400`,
      )}
      data-testid="card-body-component"
    >
      {children}
    </div>
  )
}

export { CardBody }
