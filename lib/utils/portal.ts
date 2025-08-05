import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const usePortal = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let element = document.getElementById('c3-portal')

    if (!element) {
      element = document.createElement('div')
      element.id = 'c3-portal'
      element.style.position = 'fixed'
      element.style.top = '0'
      element.style.left = '0'
      element.style.pointerEvents = 'none'
      element.style.zIndex = '9999'
      document.body.appendChild(element)
    }

    setPortalElement(element)

    return () => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [])

  return portalElement
}

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const portalElement = usePortal()

  if (!portalElement) return null

  return createPortal(children, portalElement)
}
