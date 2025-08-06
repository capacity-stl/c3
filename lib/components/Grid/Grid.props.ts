import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { bgColorProps } from '@props/color.props'
import { borderProps } from '@props/border.props'
import { layoutProps } from '@props/layout.props'

const gridVariants = cva('grid', {
  variants: {
    ...marginProps,
    ...paddingProps,
    ...heightProps,
    ...widthProps,
    ...bgColorProps,
    ...borderProps,
    ...layoutProps,

    cols: {
      '1': 'grid-cols-1',
      '2': 'grid-cols-2',
      '3': 'grid-cols-3',
      '4': 'grid-cols-4',
      '5': 'grid-cols-5',
      '6': 'grid-cols-6',
      '7': 'grid-cols-7',
      '8': 'grid-cols-8',
      '9': 'grid-cols-9',
      '10': 'grid-cols-10',
      '11': 'grid-cols-11',
      '12': 'grid-cols-12',
      none: 'grid-cols-none',
      subgrid: 'grid-cols-subgrid',
    },

    rows: {
      '1': 'grid-rows-1',
      '2': 'grid-rows-2',
      '3': 'grid-rows-3',
      '4': 'grid-rows-4',
      '5': 'grid-rows-5',
      '6': 'grid-rows-6',
      '7': 'grid-rows-7',
      '8': 'grid-rows-8',
      '9': 'grid-rows-9',
      '10': 'grid-rows-10',
      '11': 'grid-rows-11',
      '12': 'grid-rows-12',
      none: 'grid-rows-none',
    },

    flow: {
      row: 'grid-flow-row',
      column: 'grid-flow-col',
      dense: 'grid-flow-row-dense',
      'col-dense': 'grid-flow-col-dense',
    },

    autoCols: {
      auto: 'auto-cols-auto',
      min: 'auto-cols-min',
      max: 'auto-cols-max',
      fr: 'auto-cols-fr',
    },

    autoRows: {
      auto: 'auto-rows-auto',
      min: 'auto-rows-min',
      max: 'auto-rows-max',
      fr: 'auto-rows-fr',
    },

    justifyItems: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },

    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },

    // Place items (shorthand for align-items + justify-items)
    placeItems: {
      start: 'place-items-start',
      center: 'place-items-center',
      end: 'place-items-end',
      stretch: 'place-items-stretch',
    },

    justifyContent: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      stretch: 'justify-stretch',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },

    alignContent: {
      start: 'content-start',
      center: 'content-center',
      end: 'content-end',
      stretch: 'content-stretch',
      between: 'content-between',
      around: 'content-around',
      evenly: 'content-evenly',
    },

    // Place content (shorthand for align-content + justify-content)
    placeContent: {
      start: 'place-content-start',
      center: 'place-content-center',
      end: 'place-content-end',
      stretch: 'place-content-stretch',
      between: 'place-content-between',
      around: 'place-content-around',
      evenly: 'place-content-evenly',
    },
  },
})

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  className?: string
  children?: React.ReactNode
  testId?: string
}

export { gridVariants }
