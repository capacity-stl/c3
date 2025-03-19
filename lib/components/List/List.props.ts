import { cva, type VariantProps } from 'class-variance-authority'

const listPropsVariants = {}

const listVariants = cva('inline-block *:h-full *:w-auto', {
  variants: { ...listPropsVariants },
})

export type ListProps<T> = VariantProps<typeof listVariants> &
  React.ComponentProps<'ul'> & {
    items: T[]
    renderItem?: (item: T) => React.ReactNode
    noItems?: string | React.ReactNode
    header?: string | React.ReactNode
    dense?: boolean
    divider?: boolean
    selectedItems?: T[]
    onItemClick?: (item: T, selected?: boolean) => void
    loading?: boolean
    testId?: string
  }

export type ListItemProps<T> = {
  item: T
  renderItem?: (item: T) => React.ReactNode
  dense?: boolean
  onItemClick?: (item: T) => void
  isSelected?: boolean
}

export { listVariants }
