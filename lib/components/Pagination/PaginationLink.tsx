import { PaginationProps, PaginationVariants } from './Pagination.props'
import { Flex } from '@components/Flex/Flex'
import { Text } from '@components/Text/Text'
import { cn } from '@utils/cn'

const PaginationLink = ({
  className,
  color = 'night',
  activeBgColor = 'earth-300',
  activeTextColor = 'white',
  value,
  onClick,
  currentPage,
  setCurrentPage,
  isCurrent,
  itemBgColor = 'white',
  ...PaginationProps
}: PaginationProps) => {
  const isCurrentPage = isCurrent ?? value === currentPage

  const handleClick = () => {
    if (setCurrentPage && value !== undefined) {
      setCurrentPage(value)
    }
    onClick?.()
  }
  return (
    <div className={cn(PaginationVariants({ ...PaginationProps }), className)}>
      <Flex
        className={cn(
          'borderRadius-small cursor-pointer',
          isCurrentPage
            ? `border-${activeBgColor} bg-${activeBgColor} text-${activeTextColor} shadow-md`
            : `hover:border-${activeBgColor} hover:bg-${activeBgColor} hover:text-${activeTextColor} hover:shadow-md bg-${itemBgColor} text-${color}
            `,
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

export { PaginationLink }
