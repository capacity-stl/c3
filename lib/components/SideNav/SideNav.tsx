import React, { useState } from 'react'
import { cn } from '../../utils/cn'
import {
  SideNavProps,
  SideNavItemProps,
  sideNavVariants,
  SIDE_NAV_STATES,
  sectionHeaderVariants,
  subItemVariants,
  badgeVariants,
} from './SideNav.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { Badge } from '@components/Badge/Badge'
import { cva, type VariantProps } from 'class-variance-authority'

const keyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
}

// Example SectionHeader component
const SectionHeader = ({
  label,
  isOpen,
  onClick,
  showCaret = true,
}: {
  label: string
  isOpen: boolean
  onClick: () => void
  showCaret?: boolean
}) => (
  <div
    className={sectionHeaderVariants()}
    onClick={showCaret ? onClick : undefined}
    role={showCaret ? 'button' : undefined}
    tabIndex={showCaret ? 0 : -1}
  >
    {showCaret && (
      <Icon
        icon="CaretRight"
        className={
          isOpen ? 'rotate-90 transition-transform' : 'transition-transform'
        }
        size="tiny"
      />
    )}
    <span className="ml-4 overflow-hidden text-ellipsis">{label}</span>
  </div>
)

const SideNavItem = ({
  label,
  link,
  subItems,
  startOpen = true,
  leadingIcon,
  leadingContent,
  trailingIcon,
  trailingNumber,
  trailingContent,
  hasSectionDivider = false,
  state = SIDE_NAV_STATES.DEFAULT,
  subItemsIcon = 'CaretRight',
  onItemClick,
  className,
  style,
  isToggle,
  isSectionHeader,
}: SideNavItemProps & { isToggle?: boolean }) => {
  const hasSubItems = subItems && subItems.length > 0
  const [isOpen, setIsOpen] = useState(hasSubItems ? startOpen : false)
  const [isHovered, setIsHovered] = useState(false)
  const isDisabled = state === SIDE_NAV_STATES.DISABLED

  // Hover overrides other states
  const effectiveState = isHovered ? SIDE_NAV_STATES.HOVERED : state
  const isActive = effectiveState === SIDE_NAV_STATES.SELECTED

  // Handle actions for keyboard and mouse
  const handleAction = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    if (isDisabled) {
      return
    }
    if (hasSubItems) {
      setIsOpen(!isOpen)
    } else {
      if (onItemClick) {
        onItemClick(e)
      } else if (link) {
        history.pushState({}, '', link)
      } else {
        console.log('No link or onItemClick')
      }
    }
  }

  const itemAriaLabel = `nav-item-${label?.toLowerCase().replace(/\s+/g, '-')}`

  // Section header logic
  const shouldRenderSectionHeader = isSectionHeader || hasSubItems
  const isExpandable = hasSubItems

  return (
    <>
      <li
        aria-expanded={isExpandable ? isOpen : undefined}
        aria-disabled={isDisabled}
        aria-label={label}
        className={cn(
          isDisabled ? 'cursor-default' : 'cursor-pointer',
          'w-full',
        )}
      >
        {/* Section header pill (expandable or static) */}
        {shouldRenderSectionHeader && (
          <SectionHeader
            label={label}
            isOpen={isOpen}
            onClick={() => isExpandable && setIsOpen(!isOpen)}
            showCaret={isExpandable}
          />
        )}
        {/* Subitem rendering */}
        {!shouldRenderSectionHeader && (
          <div
            className={cn(
              subItemVariants({ selected: isActive }),
              isToggle &&
                'text-earth cursor-pointer bg-transparent font-semibold hover:underline',
              className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={style}
            onClick={onItemClick}
            tabIndex={isDisabled ? -1 : 0}
          >
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {leadingIcon && (
                  <Icon
                    icon={leadingIcon}
                    size="small"
                    className={isActive ? 'text-white' : 'text-deep-space'}
                    aria-hidden="true"
                  />
                )}
                {leadingContent}
                <Text
                  type="body-strong"
                  className={isActive ? 'text-white' : 'text-deep-space'}
                >
                  {label}
                </Text>
              </div>
              <div className="flex items-center gap-2">
                {trailingContent}
                {trailingIcon && (
                  <Icon
                    icon={trailingIcon}
                    size="small"
                    className={isActive ? 'text-white' : 'text-deep-space'}
                    aria-hidden="true"
                  />
                )}
                {typeof trailingNumber === 'number' && (
                  <Badge
                    shape="rounded"
                    size="small"
                    className={badgeVariants({
                      selected: isActive,
                      zero: trailingNumber === 0,
                    })}
                    aria-label={`${trailingNumber} items`}
                  >
                    {trailingNumber}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Subitems list */}
        {isExpandable && isOpen && (
          <ul
            className="list-none space-y-1 pl-0 pt-1"
            aria-labelledby={itemAriaLabel}
          >
            {subItems?.map((subItem, index) => (
              <SideNavItem key={index} {...subItem} />
            ))}
          </ul>
        )}
      </li>
      {hasSectionDivider && (
        <div className="h-px w-full bg-meteor-200" aria-hidden="true" />
      )}
    </>
  )
}

const SideNav = ({
  items,
  className,
  style,
  itemsClassName,
  itemsStyle,
  ...sideNavProps
}: SideNavProps) => {
  const mergedProps = {
    ...sideNavProps,
  }

  return (
    <nav
      className={cn(
        sideNavVariants({ ...mergedProps }),
        className,
        'px-2.5 py-5',
      )}
      style={style}
      role="navigation"
      aria-label="Side navigation (contextual)"
      data-testid="navigation-component"
    >
      <ul className="list-none space-y-1">
        {items.map((item, index) => (
          <SideNavItem
            key={index}
            {...item}
            className={cn(itemsClassName, item.className)}
            style={itemsStyle}
          />
        ))}
      </ul>
    </nav>
  )
}

export { SideNav }
