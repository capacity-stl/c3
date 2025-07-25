import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { fontSizes } from '@props/font.props'
import { Icons } from '@components/Icon/Glyphs'

export const BUTTON_TYPES = {
  Primary: 'primary',
  Secondary: 'secondary',
  Minimal: 'minimal',
  Destructive: 'destructive',
} as const

export const BUTTON_SIZES = {
  Small: 'small',
  Medium: 'medium',
} as const

export const BUTTON_STATES = {
  Initial: 'initial',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
  Disabled: 'disabled',
} as const

export const BUTTON_DISPLAY_STYLES = {
  Block: 'block',
  Inline: 'inline-block',
} as const

export const buttonTextSizeMapping = {
  [BUTTON_SIZES.Small]: 'label-small-strong',
  [BUTTON_SIZES.Medium]: 'body-small-strong',
} as const

export const buttonIconSizeMapping = {
  [BUTTON_SIZES.Small]: 'tiny',
  [BUTTON_SIZES.Medium]: 'small',
} as const

export const buttonBadgeSizeMapping = {
  [BUTTON_SIZES.Small]: 'large',
  [BUTTON_SIZES.Medium]: 'huge',
} as const

export const buttonStateIconMapping = {
  [BUTTON_STATES.Loading]: Icons.Spinner,
  [BUTTON_STATES.Error]: Icons.Close,
  [BUTTON_STATES.Success]: Icons.Check,
  [BUTTON_STATES.Initial]: null,
  [BUTTON_STATES.Disabled]: null,
} as const

const buttonVariants = cva(
  ['relative', 'rounded-sm', 'overflow-hidden', 'focus:outline-none'],
  {
    variants: {
      size: {
        [BUTTON_SIZES.Small]: [
          heightProps.h['8'],
          fontSizes['label-small-strong'],
        ],
        [BUTTON_SIZES.Medium]: [
          heightProps.h['9'],
          fontSizes['body-small-strong'],
        ],
      },
      type: {
        [BUTTON_TYPES.Primary]: ['text-white', 'shadow-button'],
        [BUTTON_TYPES.Secondary]: [
          'text-earth-300',
          'active:text-earth-400',
          'shadow-button',
        ],
        [BUTTON_TYPES.Minimal]: ['text-earth-300', 'active:text-earth-400'],
        [BUTTON_TYPES.Destructive]: ['text-white', 'shadow-button'],
      },
      state: {
        [BUTTON_STATES.Initial]: [],
        [BUTTON_STATES.Loading]: ['pointer-events-none'],
        [BUTTON_STATES.Success]: [],
        [BUTTON_STATES.Error]: [],
        [BUTTON_STATES.Disabled]: ['pointer-events-none'],
      },
      display: {
        [BUTTON_DISPLAY_STYLES.Block]: ['block'],
        [BUTTON_DISPLAY_STYLES.Inline]: ['inline-block', 'align-middle'],
      },
      ...marginProps,
      ...widthProps,
    },
  },
)

const buttonBodyVariants = cva(
  ['p-2', 'rounded-sm', 'flex', 'gap-2', 'items-center'],
  {
    variants: {
      size: {
        [BUTTON_SIZES.Small]: [heightProps.h['8']],
        [BUTTON_SIZES.Medium]: [heightProps.h['9']],
      },
      type: {
        [BUTTON_TYPES.Primary]: [
          'bg-earth-300',
          'hover:bg-earth-400',
          'focus:bg-earth-400',
          'active:bg-night',
        ],
        [BUTTON_TYPES.Secondary]: [
          'bg-white',
          'hover:bg-earth-100',
          'focus:bg-earth-100',
          'active:bg-earth-200',
          'active:text-earth-400',
        ],
        [BUTTON_TYPES.Minimal]: [
          'bg-transparent',
          'hover:bg-earth-100',
          'focus:bg-earth-100',
          'active:bg-earth-200',
          'active:text-earth-400',
        ],
        [BUTTON_TYPES.Destructive]: [
          'bg-mars-300',
          'hover:bg-mars-400',
          'focus:bg-mars-400',
          'active:bg-mars-400',
          'active:text-mars-200',
        ],
      },
      state: {
        [BUTTON_STATES.Initial]: [],
        [BUTTON_STATES.Loading]: ['opacity-0'],
        [BUTTON_STATES.Success]: ['opacity-0'],
        [BUTTON_STATES.Error]: ['opacity-0'],
        [BUTTON_STATES.Disabled]: [],
      },
    },
    compoundVariants: [
      {
        type: [BUTTON_TYPES.Primary, BUTTON_TYPES.Destructive],
        state: [
          BUTTON_STATES.Initial,
          BUTTON_STATES.Loading,
          BUTTON_STATES.Success,
          BUTTON_STATES.Error,
        ],
        class: ['text-white'],
      },
      {
        type: [BUTTON_TYPES.Primary, BUTTON_TYPES.Destructive],
        state: BUTTON_STATES.Disabled,
        class: ['bg-meteor-100', 'text-meteor-400'],
      },
      {
        type: BUTTON_TYPES.Secondary,
        state: [
          BUTTON_STATES.Initial,
          BUTTON_STATES.Loading,
          BUTTON_STATES.Success,
          BUTTON_STATES.Error,
        ],
        class: ['text-earth-300', 'shadow-inline-earth-300'],
      },
      {
        type: BUTTON_TYPES.Secondary,
        state: BUTTON_STATES.Disabled,
        class: ['text-meteor-300', 'shadow-inline-meteor-200'],
      },
      {
        type: BUTTON_TYPES.Minimal,
        state: [
          BUTTON_STATES.Initial,
          BUTTON_STATES.Loading,
          BUTTON_STATES.Success,
          BUTTON_STATES.Error,
        ],
        class: ['text-earth-300'],
      },
      {
        type: BUTTON_TYPES.Minimal,
        state: BUTTON_STATES.Disabled,
        class: ['text-meteor-300'],
      },
    ],
  },
)

const overlayVariants = cva(
  [
    'absolute',
    'w-full',
    'h-full',
    'top-0',
    'left-0',
    'flex',
    'justify-center',
    'items-center',
    'rounded-sm',
  ],
  {
    variants: {
      type: {
        [BUTTON_TYPES.Primary]: [],
        [BUTTON_TYPES.Secondary]: [],
        [BUTTON_TYPES.Minimal]: [],
        [BUTTON_TYPES.Destructive]: [],
      },
      state: {
        [BUTTON_STATES.Initial]: [],
        [BUTTON_STATES.Loading]: [],
        [BUTTON_STATES.Success]: [],
        [BUTTON_STATES.Error]: [],
        [BUTTON_STATES.Disabled]: [],
      },
    },
    compoundVariants: [
      {
        type: BUTTON_TYPES.Primary,
        state: BUTTON_STATES.Loading,
        class: ['bg-earth-200'],
      },
      {
        type: BUTTON_TYPES.Secondary,
        state: BUTTON_STATES.Loading,
        class: ['shadow-inline-earth-300', 'bg-earth-100', 'text-earth-300'],
      },
      {
        type: BUTTON_TYPES.Minimal,
        state: BUTTON_STATES.Loading,
        class: ['bg-earth-100'],
      },
      {
        type: BUTTON_TYPES.Destructive,
        state: BUTTON_STATES.Loading,
        class: ['bg-mars-200'],
      },
      {
        type: BUTTON_TYPES.Primary,
        state: BUTTON_STATES.Success,
        class: ['bg-neptune-300', 'text-white'],
      },
      {
        type: BUTTON_TYPES.Secondary,
        state: BUTTON_STATES.Success,
        class: [
          'shadow-inline-neptune-300',
          'bg-neptune-100',
          'text-neptune-300',
        ],
      },
      {
        type: BUTTON_TYPES.Minimal,
        state: BUTTON_STATES.Success,
        class: ['bg-neptune-100', 'text-neptune-300'],
      },
      {
        type: BUTTON_TYPES.Destructive,
        state: BUTTON_STATES.Success,
        class: ['bg-neptune-300', 'text-white'],
      },
      {
        type: BUTTON_TYPES.Primary,
        state: BUTTON_STATES.Error,
        class: ['bg-mars-300', 'text-white'],
      },
      {
        type: BUTTON_TYPES.Secondary,
        state: BUTTON_STATES.Error,
        class: ['shadow-inline-mars-300', 'bg-mars-100', 'text-mars-300'],
      },
      {
        type: BUTTON_TYPES.Minimal,
        state: BUTTON_STATES.Error,
        class: ['bg-mars-100', 'text-mars-300'],
      },
      {
        type: BUTTON_TYPES.Destructive,
        state: BUTTON_STATES.Error,
        class: ['bg-mars-300', 'text-white'],
      },
    ],
  },
)

const overlayIconVariants = cva([], {
  variants: {
    state: {
      [BUTTON_STATES.Initial]: [],
      [BUTTON_STATES.Loading]: ['animate-spin'],
      [BUTTON_STATES.Success]: [],
      [BUTTON_STATES.Error]: [],
      [BUTTON_STATES.Disabled]: [],
    },
  },
})

const textClassString = 'first:ml-1 last:mr-1'

const componentVariants = (props: object) => {
  return {
    buttonClassString: buttonVariants(props),
    buttonBodyClassString: buttonBodyVariants(props),
    overlayClassString: overlayVariants(props),
    overlayIconClassString: overlayIconVariants(props),
    textClassString,
  }
}

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  testId?: string
  type?: (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES]
  size?: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES]
  state?: (typeof BUTTON_STATES)[keyof typeof BUTTON_STATES]
  display?: (typeof BUTTON_DISPLAY_STYLES)[keyof typeof BUTTON_DISPLAY_STYLES]
}

export {
  componentVariants,
  buttonVariants,
  buttonBodyVariants,
  overlayVariants,
  overlayIconVariants,
  textClassString,
}
