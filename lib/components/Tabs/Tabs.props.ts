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

export const tabListVariants = cva('', {
  variants: {
    ...tabsPropsVariants,
  },
})

export const tabItemVariants = cva(
  'text-meteor-500 flex cursor-pointer items-center px-3 py-1.5 text-sm font-medium transition-all whitespace-nowrap uppercase tracking-wider border-b-2 border-transparent',
  {
    variants: {
      isActive: {
        true: 'border-earth-300 text-earth-300',
      },
      isDisabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: {
      isActive: false,
      isDisabled: false,
    },
  }
)

export interface TabItem {
  key: string;
  title: string;
  count?: number;
  disabled?: boolean;
  linkTo?: string;
  className?: string;
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