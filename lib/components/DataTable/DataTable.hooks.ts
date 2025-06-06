import { useState } from 'react'

const useDefaultSortHandler = (
  initialSortKey: string,
  initialIsAscending: boolean,
) => {
  const [sortKey, setSortKey] = useState<string>(initialSortKey)
  const [isAscending, setIsAscending] = useState<boolean>(initialIsAscending)

  const onSort = (newSortKey: string) => {
    if (sortKey === newSortKey) {
      setIsAscending(!isAscending)
    } else {
      setSortKey(newSortKey)
    }
  }

  return { onSort, sortKey, isAscending }
}

export { useDefaultSortHandler }
