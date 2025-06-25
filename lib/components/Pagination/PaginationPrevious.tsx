import { PaginationProps, PaginationVariants } from './Pagination.props'
import { Icon } from '@components/Icon/Icon'
import { Flex } from '@components/Flex/Flex'
import { cn } from '@utils/cn'

const PaginationPrevious = ({
  className,
  bgColor = 'white',
  color = 'night',
  icon = 'CaretLeft',
  onClick,
  disabled = false,
  ...PaginationProps
}: PaginationProps) => {
  return (
    <div
      className={cn(
        PaginationVariants({ ...PaginationProps }),
        className,
        bgColor ? `bg-${bgColor}` : '',
        color ? `text-${color}` : '',
      )}
    >
      <Flex
        className={cn(
          disabled
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:border-earth-300 hover:text-earth-300 hover:shadow-md',
        )}
        borderRadius="small"
        border="default"
        p="2"
        w="9"
        h="9"
        align="center"
        justify="center"
        m="1"
        onClick={disabled ? undefined : onClick}
      >
        <Icon icon={icon} size="xsmall" />
      </Flex>
    </div>
  )
}

export { PaginationPrevious }
