import React, {
  useEffect,
  useMemo,
  useState,
  Children,
  isValidElement,
  useCallback,
} from 'react'
import { cn } from '@utils/cn'
import { Icon } from '@components/Icon/Icon'
import { Text } from '@components/Text/Text'
import {
  CollapsibleDrawerProps,
  CollapsibleDrawerHeaderProps,
  CollapsibleDrawerButtonProps,
  componentVariants,
  iconButtonVariants,
} from './CollapsibleDrawer.props'
import { CollapsibleSheetProps } from './CollapsibleSheet.props'

/* Utilities */
const deriveActiveIndex = (
  children: Array<React.ReactElement<CollapsibleSheetProps>>,
  openSectionId?: string | null,
) => {
  const activeIndex = children.reduce<number | null>(
    (active, element, index) => {
      return element?.props?.id === openSectionId ? index : active
    },
    null,
  )

  console.log('deriveActiveIndex', activeIndex)

  return activeIndex
}

const useActiveIndex = (
  elements: Array<React.ReactElement<CollapsibleSheetProps>>,
  openSectionId?: string | null,
) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    setActiveIndex(deriveActiveIndex(elements, openSectionId))
  }, [openSectionId]) //eslint-disable-line react-hooks/exhaustive-deps

  return { activeIndex, setActiveIndex }
}

/* Components */
const DrawerButton = ({
  icon,
  isSelected = false,
  onClick,
  testId,
  title,
}: CollapsibleDrawerButtonProps) => {
  const className = iconButtonVariants({ isSelected })

  return (
    <button
      className={cn(className)}
      onClick={onClick}
      title={title}
      data-testid={testId}
    >
      <Icon
        className="block"
        color={isSelected ? 'white' : 'meteor-400'}
        icon={icon}
      />
    </button>
  )
}

const DrawerHeader = ({
  title,
  headerComponent,
}: CollapsibleDrawerHeaderProps) => {
  if (!headerComponent)
    return (
      <Text as="div" type="small-caps">
        {title}
      </Text>
    )

  if (typeof headerComponent === 'function')
    return React.createElement(headerComponent)

  return headerComponent
}

const CollapsibleDrawer = (props: CollapsibleDrawerProps) => {
  const {
    bgColor,
    borderColor,
    children,
    className,
    dropToSide,
    hideSidebarWhenOpen,
    openSectionId,
    testId,
    w,
  } = {
    hideSidebarWhenOpen: false,
    borderColor: 'meteor-200',
    dropToSide: 'right',
    w: '80',
    ...props,
  }

  const [elements, meta] = useMemo(() => {
    const meta = [] as Array<CollapsibleSheetProps>
    const elements = [] as Array<React.ReactElement<CollapsibleSheetProps>>

    Children.forEach(children, (element) => {
      if (isValidElement(element)) {
        meta.push(element.props)
        elements.push(element)
      }
    })

    return [elements, meta]
  }, [children])

  const { activeIndex, setActiveIndex } = useActiveIndex(
    elements,
    openSectionId,
  )
  const isOpen = typeof activeIndex === 'number'

  const handleIndexChange = useCallback(
    (newIndex: number | null) => {
      if (newIndex === activeIndex) return

      if (
        typeof activeIndex === 'number' &&
        typeof meta?.[activeIndex]?.onDeselect === 'function'
      )
        meta[activeIndex].onDeselect?.()

      if (
        typeof newIndex === 'number' &&
        typeof meta?.[newIndex]?.onSelect === 'function'
      )
        meta[newIndex].onSelect?.()

      setActiveIndex(newIndex)
    },
    [activeIndex], //eslint-disable-line react-hooks/exhaustive-deps
  )

  /* CVA class strings */
  const {
    rootClassString,
    contentColumnClassString,
    contentColumnHeaderClassString,
    contentColumnContainerClassString,
    iconColumnClassString,
  } = componentVariants({ bgColor, borderColor, dropToSide, w })

  return (
    <aside className={cn(rootClassString, className)} data-testid={testId}>
      {!isOpen || (isOpen && !hideSidebarWhenOpen) ? (
        <div className={iconColumnClassString}>
          {meta?.map((metaItem, index) => (
            <DrawerButton
              icon={metaItem.icon}
              isSelected={activeIndex === index}
              onClick={() => handleIndexChange(index)}
              testId={`${metaItem?.testId ?? `sheet-${index}`}-icon`}
              title={metaItem.title}
            />
          ))}
        </div>
      ) : null}
      {isOpen ? (
        <section className={cn(contentColumnClassString)}>
          <div className={cn(contentColumnHeaderClassString)}>
            <div>
              <DrawerHeader
                headerComponent={meta[activeIndex]?.headerComponent}
                title={meta[activeIndex].title}
              />
            </div>
            <DrawerButton
              icon={meta[activeIndex]?.closeIcon ?? Icon.Glyph.Close}
              onClick={() => handleIndexChange(null)}
              title="Close Drawer"
            />
          </div>
          <div
            className={cn(contentColumnContainerClassString)}
            data-testid={`${meta[activeIndex]?.testId ?? `sheet-${activeIndex}`}-content`}
          >
            {typeof meta?.[activeIndex]?.component === 'function'
              ? React.createElement(
                  meta[activeIndex].component as React.FunctionComponent,
                )
              : elements[activeIndex]}
          </div>
        </section>
      ) : null}
    </aside>
  )
}

export { CollapsibleDrawer }
