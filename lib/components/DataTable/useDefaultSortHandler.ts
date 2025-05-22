import { useState } from 'react'

export type DirectionMappingShape = {
  ASC: string
  DESC: string
}

const useDefaultSortHandler = (
  directionMapping: DirectionMappingShape,
  initialColumn: string,
  initialOrder: (typeof directionMapping)[keyof typeof directionMapping],
) => {
  const [column, setColumn] = useState<string>(initialColumn)
  const [order, setOrder] = useState<string>(initialOrder)

  const orderKey = order === directionMapping.ASC ? 'ASC' : 'DESC'

  const onSort = (newColumn: string) => {
    if (column === newColumn) {
      setOrder(
        order === directionMapping.ASC
          ? directionMapping.DESC
          : directionMapping.ASC,
      )
    } else {
      setColumn(newColumn)
    }
  }

  return { onSort, column, order, orderKey }
}

export { useDefaultSortHandler }
