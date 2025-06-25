import { PaginationProps, PaginationVariants } from './Pagination.props'
import { Flex } from '@components/Flex/Flex'
import { Text } from '@components/Text/Text'
import { cn } from '@utils/cn'
import { getColorClasses } from './Pagination.utils'

interface PaginationItemComponentProps {
  className?: string
  value?: number
  currentPage?: number
  setCurrentPage?: (page: number) => void
  isCurrent?: boolean
  // Color props that come from the parent
  bgColor?: string
  textColor?: string
  borderColor?: string
  activeBgColor?: string
  activeTextColor?: string
  activeBorderColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  hoverBorderColor?: string
}

const PaginationItem = ({
  className,
  value,
  currentPage,
  setCurrentPage,
  isCurrent,
  // Item colors
  bgColor = 'white',
  textColor = 'night',
  borderColor = 'earth-300',
  // Active colors
  activeBgColor = 'earth-300',
  activeTextColor = 'white',
  activeBorderColor = 'earth-300',
  // Hover colors
  hoverBgColor = 'earth-100',
  hoverTextColor = 'night',
  hoverBorderColor = 'earth-300',
  ...props
}: PaginationItemComponentProps & PaginationProps) => {
  const isCurrentPage = isCurrent ?? value === currentPage

  const handleClick = () => {
    if (setCurrentPage && value !== undefined) {
      setCurrentPage(value)
    }
  }

  return (
    <div className={cn(PaginationVariants({ ...props }), className)}>
      <Flex
        className={cn(
          'borderRadius-small cursor-pointer',
          getColorClasses(
            isCurrentPage,
            activeBgColor,
            activeTextColor,
            activeBorderColor,
            hoverBgColor,
            hoverTextColor,
            hoverBorderColor,
            bgColor,
            borderColor,
            textColor,
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
        onClick={handleClick}
      >
        <Text className="" type="body-small" color="inherit">
          {value}
        </Text>
      </Flex>
    </div>
  )
}

export { PaginationItem }
