export const keyboardEventMapper = (
  events: {
    [key: string]: (e: React.KeyboardEvent) => void
  },
  options?: {
    preventDefault?: boolean
    stopPropagation?: boolean
  },
) => {
  return (e: React.KeyboardEvent) => {
    const { key } = e

    if (typeof events[key] === 'function') {
      console.log('key', key, 'has event')
      if (options?.preventDefault) e.preventDefault()
      if (options?.stopPropagation) e.stopPropagation()

      events[key](e)
    }
  }
}

export const scopeKeyboardEventToElement = (
  e: React.KeyboardEvent,
  element: HTMLElement,
  callback: (e: React.KeyboardEvent) => void = () => {},
) => {
  if (e.target === element) {
    callback(e)

    e.preventDefault()
    e.stopPropagation()
  }
}
