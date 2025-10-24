import { useEffect, RefObject } from 'react'

const useClickOutside = (
  onClick: () => void,
  scopeRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (scopeRef?.current?.contains(event.target as Node)) {
        return null
      }
  
      onClick()
    }

    if (scopeRef?.current) {
      document.addEventListener('mousedown', handleClick)

      return () => {
        document.removeEventListener('mousedown', handleClick)
      }
    }
  }, [scopeRef, onClick])
}

export { useClickOutside }
