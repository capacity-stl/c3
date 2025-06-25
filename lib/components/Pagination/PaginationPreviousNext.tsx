import { PaginationProps, PaginationVariants } from './Pagination.props'
import { Icon } from '@components/Icon/Icon'
import { Flex } from '@components/Flex/Flex'
import { cn } from '@utils/cn'
import { getNextPreviousColorClasses } from './Pagination.utils'
import { Icons } from '@components/Icon/Glyphs'

interface PaginationPreviousNextComponentProps {
  className?: string
  icon?: keyof typeof Icons
  onClick?: () => void
  disabled?: boolean
  nextPreviousType?: 'next' | 'previous'
  // Color props from parent
  bgColor?: string
  borderColor?: string
  textColor?: string
  hoverBgColor?: string
  hoverBorderColor?: string
  hoverTextColor?: string
}

const PaginationPreviousNext = ({
  className,
  icon = 'CaretRight',
  onClick,
  disabled = false,
  nextPreviousType = 'next',
  // Color props
  bgColor = 'white',
  borderColor = 'earth-300',
  textColor = 'night',
  hoverBgColor = 'earth-100',
  hoverBorderColor = 'earth-300',
  hoverTextColor = 'night',
  ...props
}: PaginationPreviousNextComponentProps & PaginationProps) => {
  return (
    <div className={cn(PaginationVariants({ ...props }), className)}>
      <Flex
        className={cn(
          getNextPreviousColorClasses(
            disabled,
            bgColor,
            borderColor,
            textColor,
            hoverBgColor,
            hoverBorderColor,
            hoverTextColor,
          ),
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
        {nextPreviousType === 'next' ? (
          <Icon icon={icon} size="xsmall" />
        ) : (
          <Icon className="rotate-180" icon={icon} size="xsmall" />
        )}
      </Flex>
    </div>
  )
}

export { PaginationPreviousNext }
