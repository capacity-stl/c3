import { RefObject } from 'react'

const useScrollIntoView = (
  scopeRef: RefObject<HTMLElement | null>,
  className: string,
) => {
  return () => {
    const [targetChild] =
      scopeRef.current?.getElementsByClassName(className) ?? []

    targetChild?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

export { useScrollIntoView }
