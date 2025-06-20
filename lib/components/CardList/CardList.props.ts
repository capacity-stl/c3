import { cva, type VariantProps } from 'class-variance-authority'
import { Icon } from '../Icon/Icon'

const cardlistVariants = cva('inline-block *:w-auto', {
  variants: {},
})

export type CardListProps<T> = VariantProps<typeof cardlistVariants> &
  React.ComponentProps<'ul'> & {
    items: (T & Partial<ListItemType>)[]
    noItems?: string | React.ReactNode
    header?: (selectedItems: T[], items: T[]) => React.ReactNode
    dense?: boolean
    divider?: boolean
    loading?: boolean
    titleKey?: string
    descriptionKey?: string
    datetimeKey?: string
    referenceKey?: string
    firstOptionAsButton?: boolean
    selectionMode?: 'single' | 'multiple' | 'none'
    textSelectable?: boolean
    bottomLeftContent?: (item: T) => React.ReactNode
    bottomRightContent?: (item: T) => React.ReactNode
    onSelectionChange?: (items: T[], lastSelectedItem?: T) => void
    defaultSelectedItems?: T[]
    testId?: string
  }

export type CardListItemProps<T> = {
  item: T & Partial<ListItemType>
  titleKey: string
  descriptionKey: string
  datetimeKey: string
  referenceKey: string
  isSelected?: boolean
  textSelectable?: boolean
  bottomLeftContent?: (item: T) => React.ReactNode
  bottomRightContent?: (item: T) => React.ReactNode
  firstOptionAsButton?: boolean
}

export interface ListItemType {
  options?: OptionItem[]
  icon?: keyof typeof Icon.Glyph
  iconColor?: string
  isSelected?: boolean // passed from ListItem component
}

// TODO: Let's talk about using this as model for options in all menues
export type OptionItem<T = () => void> = {
  name: string
  label: string
  action: T
  icon?: string
  iconColor?: string
  description?: string
  color?: string
  hidden?: boolean
}

export { cardlistVariants }
