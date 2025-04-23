import React, { useState } from 'react'
import { cn } from '../../utils/cn'
import {
  SideNavProps,
  SideNavItemProps,
  sideNavVariants,
  sideNavItemVariants,
  SideNavItemState,
} from './SideNav.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { Badge } from '@components/Badge/Badge'

const keyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
}

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
  state = SideNavItemState.DEFAULT,
  onItemClick,
  className,
  style,
  testId = 'navigation-item-component',
  ...navItemProps
}: SideNavItemProps) => {
  const hasSubItems = subItems && subItems.length > 0
  const [isOpen, setIsOpen] = useState(hasSubItems ? startOpen : false)
  const [isHovered, setIsHovered] = useState(false)
  const isDisabled = state === SideNavItemState.DISABLED

  // Hover overrides other states
  const effectiveState = isHovered ? SideNavItemState.HOVERED : state

  const stateToColor = {
    [SideNavItemState.DEFAULT]: {
      background: '',
      icon: 'text-deep-space',
      text: 'text-deep-space',
      numberBadge: '',
    },
    [SideNavItemState.HOVERED]: {
      background: 'bg-meteor-200',
      icon: 'text-deep-space',
      text: 'text-deep-space',
      numberBadge: '',
    },
    [SideNavItemState.SELECTED]: {
      background: 'bg-earth-300',
      icon: 'text-earth-100',
      text: 'text-white',
      numberBadge: 'bg-earth-400 text-white',
    },
    [SideNavItemState.DISABLED]: {
      background: '',
      icon: 'text-meteor-300',
      text: 'text-meteor-300',
      numberBadge: '',
    },
  }

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

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === keyboardKeys.ENTER || e.key === keyboardKeys.SPACE) {
      handleAction(e)
    } else if (e.key === keyboardKeys.ESCAPE && isOpen) {
      setIsOpen(false)
    }
  }

  // Mouse navigation
  const handleClick = (e: React.MouseEvent) => {
    handleAction(e)
  }

  const itemAriaLabel = `nav-item-${label?.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <>
      <li
        aria-expanded={hasSubItems ? isOpen : undefined}
        aria-disabled={isDisabled}
        aria-label={label}
        className={cn(
          isDisabled ? 'cursor-default' : 'cursor-pointer',
          'w-full',
        )}
      >
        <div
          className={cn(
            'flex w-full rounded-md',
            stateToColor[effectiveState].background,
            sideNavItemVariants({ ...navItemProps }),
            className,
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={style}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={isDisabled ? -1 : 0}
          id={itemAriaLabel}
        >
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {isOpen ||
              (hasSubItems &&
                (isHovered || (!leadingIcon && !leadingContent))) ? (
                <div
                  className="bg-meteor-200 flex h-5 w-5 items-center justify-center rounded-xs"
                  aria-hidden="true"
                >
                  <Icon
                    icon="CaretRight"
                    size="tiny"
                    className={cn(
                      'transition-transform duration-200',
                      isOpen && 'rotate-90',
                    )}
                  />
                </div>
              ) : leadingIcon || leadingContent ? (
                <>
                  {leadingIcon && (
                    <Icon
                      icon={leadingIcon}
                      size="small"
                      className={stateToColor[effectiveState].icon}
                      aria-hidden="true"
                    />
                  )}
                  {leadingContent}
                </>
              ) : (
                <div className="w-5" aria-hidden="true" />
              )}

              <Text
                type="body-strong"
                className={stateToColor[effectiveState].text}
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
                  className={stateToColor[effectiveState].icon}
                  aria-hidden="true"
                />
              )}
              {trailingNumber && (
                <Badge
                  shape="rounded"
                  size="small"
                  className={stateToColor[effectiveState].numberBadge}
                  aria-label={`${trailingNumber} items`}
                >
                  {trailingNumber}
                </Badge>
              )}
            </div>
          </div>
        </div>
        {hasSubItems && isOpen && (
          <ul
            className="list-none space-y-1 pt-1 pl-4"
            aria-labelledby={itemAriaLabel}
          >
            {subItems?.map((subItem, index) => (
              <SideNavItem key={index} {...subItem} className={className} />
            ))}
          </ul>
        )}
      </li>
      {hasSectionDivider && (
        <div className="bg-meteor-200 h-0.25 w-full" aria-hidden="true" />
      )}
    </>
  )
}

const SideNav = ({
  items,
  className,
  style,
  testId = 'navigation-component',
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
      data-testid={testId}
      role="navigation"
      aria-label="Side navigation (contextual)"
    >
      <ul className="list-none space-y-1">
        {items.map((item, index) => (
          <SideNavItem
            key={index}
            className={itemsClassName}
            style={itemsStyle}
            {...item}
          />
        ))}
      </ul>
    </nav>
  )
}

export { SideNav }
