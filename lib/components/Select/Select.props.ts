import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { borderProps } from '@props/border.props'
import { fontSizes } from '@props/font.props'
import { SelectFilterEnums } from './SelectFilter.props'

export const SelectSizes = {
  Small: 'small',
  Medium: 'medium',
} as const

export const SelectTypes = {
  Standard: 'standard',
  Shadow: 'shadow',
} as const

export const SelectItemRenderingContext = {
  SelectedSingle: 'selected',
  SelectedMultiple: 'selectedaslist',
  SelectedChip: 'selectedaschip',
  Flyout: 'inflyout',
} as const

const rootVariants = cva(['relative', 'bg-white', 'w-72', 'text-night'], {
  variants: {
    type: {
      [SelectTypes.Standard]: [borderProps.border.focus],
      [SelectTypes.Shadow]: [
        'shadow-contact',
        'focus:shadow-contact-focus',
        'focus:outline-none',
        borderProps.border.transparent,
      ],
    },
    size: {
      [SelectSizes.Small]: [
        heightProps.h['9'],
        'rounded-sm',
        fontSizes['body-small'],
      ],
      [SelectSizes.Medium]: [
        heightProps.h['11'],
        'rounded-md',
        fontSizes['body'],
      ],
    },
    hasLeadingIcon: { true: '', false: '' },
    hasTrailingIcon: { true: '', false: '' },
    isError: { true: '', false: '' },
    isOpen: { true: '', false: '' },
    ...marginProps,
    ...widthProps,
  },
  compoundVariants: [
    {
      type: SelectTypes.Standard,
      isError: true,
      class: [borderProps.border.error],
    },
    {
      type: SelectTypes.Shadow,
      isError: true,
      class: [
        'shadow-contact-error',
        'focus:shadow-contact-focus',
        borderProps.border.transparent,
      ],
    },
    {
      type: SelectTypes.Standard,
      isOpen: true,
      class: [borderProps.border.focused],
    },
    {
      type: SelectTypes.Shadow,
      isOpen: true,
      class: [
        'shadow-contact-focus',
        'outline-none',
        borderProps.border.transparent,
      ],
    },
  ],
})

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
  }
}

export type KeyedDataObject = {
  [key: string]: string | number | boolean | object
}
export type SelectItemType = string | number | boolean | KeyedDataObject
export type SelectItemsType =
  | Array<string>
  | Array<number>
  | Array<boolean>
  | Array<KeyedDataObject>

export type ItemToStringType = (item: SelectItemType) => string
export type RenderItemType = (props: {
  item: SelectItemType
  classNames: {
    rootClassString: string
    leadingIconClassString: string
    trailingIconClassString: string
    labelContainerClassString: string
    labelClassString: string
    subLabelClassString: string
  }
  renderContext: (typeof SelectItemRenderingContext)[keyof typeof SelectItemRenderingContext]
  isSelected: boolean
  dataKeyMapping: KeyMappingShape
}) => JSX.Element

/*
  KeyMappingShape defines the dataKeyMapping prop

  This is an object that defines how the free `item` shape should map to the
  fixed keys expected by DefaultSelectItem. The keys in this object are the
  props that DefaultSelectItem expects, and the valeus should be the string
  name of the key in the source `item` object schema
*/
export type KeyMappingShape = {
  label: string
  value?: string
  subLabel?: string
  leadingIcon?: string
  trailingIcon?: string
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof rootVariants> {
  /* Base Props ------------------------------------------------------------ */
  items: SelectItemsType
  onChange: (item: SelectItemType | SelectItemsType) => void
  value?: SelectItemType | SelectItemsType
  placeholder?: string
  className?: string
  multi?: boolean

  /* Display Props --------------------------------------------------------- */
  size?: (typeof SelectSizes)[keyof typeof SelectSizes]
  type?: (typeof SelectTypes)[keyof typeof SelectTypes]
  isError?: boolean
  isLoading?: boolean
  selectAsChips?: boolean

  /* Data Handling Props --------------------------------------------------- */
  dataKeyMapping?: KeyMappingShape
  renderItem?: RenderItemType
  itemToString?: ItemToStringType

  /* Filter Settings ------------------------------------------------------- */
  filterBoxDirect?: boolean
  filterBehavior?: SelectFilterEnums
  filterPlaceholder?: string
  filterValue?: string
  onFilterValueChange?: (filterValue: string) => void

  testId?: string
}

export { rootVariants, componentVariants }
