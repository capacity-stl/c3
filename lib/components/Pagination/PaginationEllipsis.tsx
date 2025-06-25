import { Icon } from '@components/Icon/Icon'
import { Flex } from '@components/Flex/Flex'

const PaginationEllipsis = () => {
  return (
    <Flex w="9" h="9" align="center" justify="center" m="1">
      <Icon className="rotate-90" icon="More" size="small" />
    </Flex>
  )
}

export { PaginationEllipsis }
