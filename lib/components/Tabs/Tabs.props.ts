import { cva, type VariantProps } from 'class-variance-authority'

import { paddingProps } from '@props/padding.props'
import { bgColorProps } from '@props/color.props'
import { borderRadiusProps } from '@props/borderradius.props'
import { widthProps } from '@props/width.props'

const tabsPropsVariants = {
  ...paddingProps,
  ...bgColorProps,
  ...borderRadiusProps,
  ...widthProps,
}

export const tabsVariants = cva('', {
  variants: {},
})

export const tabListVariants = cva('', {
  variants: {
    ...tabsPropsVariants,
  },
})

export const tabVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-meteor-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'relative h-9 rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 text-meteor-500 hover:text-deep-space data-[state=active]:border-b-deep-space data-[state=active]:text-deep-space',
        solid:
          'rounded-md border border-meteor-200 bg-white px-3 py-1 text-meteor-500 hover:bg-meteor-50 data-[state=active]:bg-deep-space data-[state=active]:text-white',
        outline:
          'rounded-md border border-meteor-200 bg-transparent px-3 py-1 text-meteor-500 hover:bg-meteor-50 data-[state=active]:border-deep-space data-[state=active]:text-deep-space',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabPanelVariants = cva('mt-2 focus:outline-none', {
  variants: {
    padding: {
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    },
  },
  defaultVariants: {
    padding: 'medium',
  },
})

export interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
  variant?: 'default' | 'solid' | 'outline';
  className?: string;
  testId?: string;
}

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabsVariants> {
  className?: string
  children?: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  testId?: string
}

export interface TabItem {
  key: string;
  title: string;
  count?: number;
  disabled?: boolean;
}

export interface TabListProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabListVariants> {
  activeTabKey?: string;
  className?: string;
  tabs?: TabItem[];
  onChangingTab?: (key: string) => void;
  testId?: string;
  hasBottomBorder?: boolean;
}

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof tabVariants> {
  className?: string
  children?: React.ReactNode
  value: string
  disabled?: boolean
  testId?: string
}

export interface TabPanelsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  testId?: string
}

export interface TabPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabPanelVariants> {
  className?: string
  children?: React.ReactNode
  value: string
  testId?: string
} 