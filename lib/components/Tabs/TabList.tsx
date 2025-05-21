import { NavLink } from 'react-router-dom'
import { isNil } from 'lodash'
import { cn } from '@utils/cn'
import { tabListVariants, TabListProps } from './Tabs.props'

export const TabList = ({
  activeTabKey,
  className,
  tabs = [],
  onChangingTab,
  testId = 'tab-list-component',
  hasBottomBorder = true,
  ...tabListProps
}: TabListProps) => {
  return (
    <div
      role="tablist"
      className={cn(
        tabListVariants({ ...tabListProps }),
        className,
        'relative flex w-full flex-col',
      )}
      data-testid={testId}
    >
      <div className={cn(
        'flex flex-row',
        hasBottomBorder && 'border-b border-meteor-200'
      )}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTabKey

          const tabComponent = (
            <div
              className={cn(
                'text-meteor-500 flex cursor-pointer items-center px-3 py-1.5 text-sm font-medium transition-all whitespace-nowrap uppercase tracking-wider',
                'border-b-2 border-transparent',
                isActive && 'border-earth-300 text-earth-300',
                tab.disabled && 'cursor-not-allowed opacity-50',
              )}
              role="tab"
              aria-selected={isActive}
              data-disabled={tab.disabled ?? false}
              key={tab.key}
              onClick={() => !tab.disabled && onChangingTab?.(tab.key)}
            >
              <div>{tab.title}</div>
              {!isNil(tab.count) && (
                <div className="rounded-full text-meteor-600 ml-1.5 bg-meteor-100 px-1 py-0.5 text-xs font-semibold">
                  {tab.count}
                </div>
              )}
            </div>
          )

          return tab.linkTo ? (
            <NavLink 
              className="inline-flex"
              to={tab.linkTo}
              style={{ 
                textDecoration: 'none',
              }}
            >
              {tabComponent}
            </NavLink>
          ) : (
            <div className="inline-flex">
              {tabComponent}
            </div>
          )
        })}
      </div>
    </div>
  )
}
