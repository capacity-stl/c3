import { cva } from 'class-variance-authority'

import { marginProps, type MarginPropTypes } from '@props/margin.props'
import { paddingProps, type PaddingPropTypes } from '@props/padding.props'
import { heightProps, type HeightPropTypes } from '@props/height.props'
import { widthProps, type WidthPropTypes } from '@props/width.props'
import { bgColorProps, type BgColorPropTypes } from '@props/color.props'
import { borderProps, type BorderPropTypes } from '@props/border.props'
import { layoutProps, type LayoutPropTypes } from '@props/layout.props'
import {
  borderRadiusProps,
  type BorderRadiusPropTypes,
} from '@props/borderradius.props'

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
    MarginPropTypes,
    PaddingPropTypes,
    HeightPropTypes,
    WidthPropTypes,
    BgColorPropTypes,
    BorderPropTypes,
    LayoutPropTypes,
    BorderRadiusPropTypes {
  className?: string
  children?: React.ReactNode
  testId?: string
  numberOfBoxes?: number
  /** Flex direction */
  direction?: 'row' | 'rowReverse' | 'col' | 'colReverse' | null
  /** Flex wrap */
  wrap?: 'wrap' | 'wrapReverse' | 'nowrap' | null
  /** Flex grow */
  grow?: boolean | null
  /** Flex shrink */
  shrink?: boolean | null
  /** Flex basis */
  basis?: 'auto' | 'full' | 'min' | 'max' | null
  /** Flex value */
  flex?: '1' | '2' | '3' | '4' | '5' | null
}
export { flexVariants }
