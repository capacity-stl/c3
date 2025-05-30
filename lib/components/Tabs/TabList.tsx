import { isNil } from 'lodash'
import { cn } from '@utils/cn'
import { tabListVariants, tabItemVariants, TabListProps } from './Tabs.props'

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
      <div
        className={cn(
          'flex flex-row',
          hasBottomBorder && 'border-b border-solid border-meteor-200',
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeTabKey

          return (
            <div
              className={cn(
                tabItemVariants({
                  isActive,
                  isDisabled: tab.disabled ?? false,
                }),
                tab.className,
                'inline-flex',
              )}
              role="tab"
              aria-selected={isActive}
              data-disabled={tab.disabled ?? false}
              key={tab.key}
              onClick={() => !tab.disabled && onChangingTab?.(tab.key)}
            >
              <div>{tab.title}</div>
              {!isNil(tab.count) && (
                <div className="text-meteor-600 ml-1.5 rounded-full bg-meteor-100 px-1 py-0.5 text-xs font-semibold">
                  {tab.count}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
