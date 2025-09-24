import { Icons } from '@components/Icon/Glyphs'

export interface CollapsibleSheetProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: keyof typeof Icons
  title: string
  id: string
  closeIcon?: keyof typeof Icons
  component?: React.FC | React.ReactNode
  headerComponent?: React.FC | React.ReactNode
  tooltip?: string
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
  onDeselect?: () => void | null
  onSelect?: () => void | null
  testId?: string
}
