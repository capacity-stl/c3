import { PaginationProps, PaginationVariants } from './Pagination.props'
import { Flex } from '@components/Flex/Flex'
import { Text } from '@components/Text/Text'
import { cn } from '@utils/cn'
import { getColorClasses } from './Pagination.utils'

const PaginationItem = ({
  className,
  value,
  currentPage,
  setCurrentPage,
  isCurrent,
  bgColor,
  textColor,
  borderColor,
  activeBgColor,
  activeTextColor,
  activeBorderColor,
  hoverBgColor,
  hoverTextColor,
  hoverBorderColor,
  ...props
}: PaginationProps) => {
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
            String(activeBgColor || ''),
            String(activeTextColor || ''),
            String(activeBorderColor || ''),
            String(hoverBgColor || ''),
            String(hoverTextColor || ''),
            String(hoverBorderColor || ''),
            String(bgColor || ''),
            String(borderColor || ''),
            String(textColor || ''),
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
