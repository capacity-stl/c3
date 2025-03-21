import { cn } from '@utils/cn'
import { CardFooterProps, cardVariants } from './Card.props'

const CardFooter = ({
  className,
  children,
  justifyContent = 'end',
  ...cardProps
}: CardFooterProps) => {
  return (
    <div
      className={cn(
        cardVariants({ ...cardProps }),
        className,
        `flex justify-${justifyContent} mt-4 gap-2`,
      )}
      data-testid="card-component"
    >
      {children}
    </div>
  )
}

export { CardFooter }
