import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { layoutProps } from '@props/layout.props'
import { borderRadiusProps } from '@props/borderradius.props'

const flexVariants = cva('flex', {
  variants: {
    ...marginProps,
    ...paddingProps,
    ...heightProps,
    ...widthProps,
    ...bgColorProps,
    ...borderProps,
    ...layoutProps,
    ...borderRadiusProps,

    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      col: 'flex-col',
      colReverse: 'flex-col-reverse',
    },

    wrap: {
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
      nowrap: 'flex-nowrap',
    },
    grow: {
      true: 'flex-grow',
      false: 'flex-grow-0',
    },
    shrink: {
      true: 'flex-shrink',
      false: 'flex-shrink-0',
    },
    basis: {
      auto: 'basis-auto',
      full: 'basis-full',
      min: 'basis-min',
      max: 'basis-max',
    },
    flex: {
      '1': 'flex-1',
      '2': 'flex-2',
      '3': 'flex-3',
      '4': 'flex-4',
      '5': 'flex-5',
    },
  },
})

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
  numberOfBoxes?: number
}
export { flexVariants }
