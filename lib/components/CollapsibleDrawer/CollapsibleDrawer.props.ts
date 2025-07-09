import { cva, type VariantProps } from 'class-variance-authority'
import { CollapsibleSheetProps } from './CollapsibleSheet.props'
import { bgColorProps, borderColorProps } from '@props/color.props'
import { widthProps } from '@props/width.props'
import { Icons } from '@components/Icon/Glyphs'

export const DropToSideOptions = {
  Left: 'left',
  Right: 'right',
} as { [key: string]: 'left' | 'right' }

const rootVariants = cva(['flex'], {
  variants: {
    dropToSide: {
      [DropToSideOptions.Left]: 'flex-row-reverse',
      [DropToSideOptions.Right]: 'flex-row',
    },
  },
})

const contentColumnVariants = cva(['flex', 'flex-col', 'min-h-0'], {
  variants: {
    dropToSide: {
      [DropToSideOptions.Left]: 'border-l border-solid',
      [DropToSideOptions.Right]: 'border-r border-solid',
    },
    ...borderColorProps,
    ...widthProps,
  },
})

const contentColumnHeaderVariants = cva(
  [
    'flex',
    'flex-none',
    'items-center',
    'justify-between',
    'border-b',
    'border-solid',
    'p-2',
    'gap-2',
  ],
  {
    variants: {
      ...borderColorProps,
    },
  },
)

const contentColumnContainerVariants = cva(['flex-auto', 'overflow-y-auto'], {
  variants: {},
})

const iconColumnVariants = cva(
  ['flex-none', 'flex', 'flex-col', 'gap-2', 'p-2'],
  {
    variants: {
      dropToSide: {
        [DropToSideOptions.Left]: 'border-l border-solid',
        [DropToSideOptions.Right]: 'border-r border-solid',
      },
      ...bgColorProps,
      ...borderColorProps,
    },
  },
)

const iconButtonVariants = cva(
  [
    'block',
    'p-2',
    'rounded-xs',
    'cursor-pointer',
    'outline-none',
    'border-none',
    'focus:shadow-outline-focus',
  ],
  {
    variants: {
      isSelected: {
        true: ['bg-earth-300', 'hover:bg-earth-400'],
        false: ['bg-meteor-100', 'hover:bg-meteor-200', 'focus:bg-meteor-200'],
      },
    },
  },
)

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    contentColumnClassString: contentColumnVariants(props),
    contentColumnHeaderClassString: contentColumnHeaderVariants(props),
    contentColumnContainerClassString: contentColumnContainerVariants(props),
    iconColumnClassString: iconColumnVariants(props),
    iconButtonClassString: iconButtonVariants(props),
  }
}

export interface CollapsibleDrawerButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof Icons
  isSelected?: boolean
  testId?: string
}

export interface CollapsibleDrawerHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  headerComponent: React.FC | React.ReactNode
}

export interface CollapsibleDrawerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof rootVariants> {
  children?:
    | React.ReactElement<CollapsibleSheetProps>
    | Array<React.ReactElement<CollapsibleSheetProps>>
  bgColor?: string
  borderColor?: string
  className?: string
  dropToSide?: 'left' | 'right'
  hideSidebarWhenOpen?: boolean
  openSectionId?: string | null
  testId?: string
  w?: string | number
  onSectionChange?: (index: string | null) => void
}

export {
  rootVariants,
  contentColumnVariants,
  contentColumnHeaderVariants,
  contentColumnContainerVariants,
  iconColumnVariants,
  iconButtonVariants,
  componentVariants,
}
