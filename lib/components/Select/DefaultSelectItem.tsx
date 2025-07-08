import { cn } from '@utils/cn'
import {
  DefaultSelectItemProps,
  componentVariants,
} from './DefaultSelectItem.props'
import { KeyMappingShape } from './Select.props'
import { Icon } from '../Icon/Icon'
import { Icons } from '@components/Icon/Glyphs'

const deriveItemShape = (
  item: DefaultSelectItemProps['item'],
  mapping: KeyMappingShape,
) => {
  switch (typeof item) {
    case 'string':
    case 'number':
    case 'boolean':
      return {
        label: String(item),
        value: item,
      }
    default:
      return {
        label: item[mapping.label],
        ...(mapping.subLabel && { subLabel: item[mapping.subLabel] }),
        ...(mapping.leadingIcon && { leadingIcon: item[mapping.leadingIcon] }),
        ...(mapping.trailingIcon && {
          trailingIcon: item[mapping.trailingIcon],
        }),
        value: mapping.value ? item[mapping.value] : item[mapping.label],
      }
  }
}

const renderIcon = (
  iconData: string | object | boolean | number,
  classString?: string,
) => {
  if (typeof iconData === 'boolean' || typeof iconData === 'number') return null

  if (typeof iconData === 'string') {
    return (
      <Icon className={classString} icon={iconData as keyof typeof Icons} />
    )
  }

  return <span>NSI</span>
}

const DefaultSelectItem = (props: DefaultSelectItemProps) => {
  const {
    item,
    dataKeyMapping,
    isActive,
    isSelected,
    index,
    className,
    onHover,
    onSelect,
  } = {
    isActive: false,
    isSelected: false,
    ...props,
  }

  const { label, leadingIcon, trailingIcon, subLabel } = deriveItemShape(
    item,
    dataKeyMapping,
  )

  const {
    rootClassString,
    leadingIconClassString,
    trailingIconClassString,
    labelContainerClassString,
    labelClassString,
    subLabelClassString,
  } = componentVariants({ isActive, isSelected })

  return (
    <div
      className={cn(rootClassString, className)}
      onMouseEnter={() => onHover(index)}
      onClick={() => onSelect(item, index, isSelected)}
    >
      {leadingIcon ? (
        <div className="flex-none">
          {renderIcon(leadingIcon, leadingIconClassString)}
        </div>
      ) : null}
      <div className={cn(labelContainerClassString, 'flex-auto')}>
        <div className={cn(labelClassString)}>{String(label)}</div>
        {subLabel ? (
          <div className={cn(subLabelClassString)}>{String(subLabel)}</div>
        ) : null}
      </div>
      {trailingIcon ? (
        <div className="flex-none">
          {renderIcon(trailingIcon, trailingIconClassString)}
        </div>
      ) : null}
    </div>
  )
}

export { DefaultSelectItem }
