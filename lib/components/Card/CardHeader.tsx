import { cn } from '@utils/cn'
import { CardHeaderProps, cardVariants } from './Card.props'
import { Text } from '@components/Text/Text'
const CardHeader = ({
  className,
  children,
  title,
  description,
  ...cardProps
}: CardHeaderProps) => {
  return (
    <div
      className={cn(
        cardVariants({ ...cardProps }),
        className,
        `mb-4 flex flex-col gap-1`,
      )}
      data-testid="card-header-component"
    >
      {title && <Text type="heading">{title}</Text>}
      {description && (
        <Text type="body-small" color="meteor-400">
          {description}
        </Text>
      )}
      {children}
    </div>
  )
}

export { CardHeader }
