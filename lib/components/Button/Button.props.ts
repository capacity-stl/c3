import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { fontSizes } from '@props/font.props'
import { Icons } from '@components/Icon/Glyphs'
import { iconsizeProps } from '@props/iconsize.props'

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Minimal = 'minimal',
  Destructive = 'destructive',
}

export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
}

export enum ButtonStates {
  Initial = 'initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
  Disabled = 'disabled',
}

export enum ButtonDisplayStyles {
  Block = 'block',
  Inline = 'inline-block',
}

const buttonVariants = cva(
  ['relative', 'rounded-sm', 'overflow-hidden', 'focus:outline-none'],
  {
    variants: {
      size: {
        [ButtonSizes.Small]: [
          heightProps.h['8'],
          fontSizes['label-small-strong'],
        ],
        [ButtonSizes.Medium]: [
          heightProps.h['9'],
          fontSizes['body-small-strong'],
        ],
      },
      type: {
        [ButtonTypes.Primary]: ['text-white', 'shadow-button'],
        [ButtonTypes.Secondary]: [
          'text-earth-300',
          'active:text-earth-400',
          'shadow-button',
        ],
        [ButtonTypes.Minimal]: ['text-earth-300', 'active:text-earth-400'],
        [ButtonTypes.Destructive]: ['text-white', 'shadow-button'],
      },
      state: {
        [ButtonStates.Initial]: [],
        [ButtonStates.Loading]: ['pointer-events-none'],
        [ButtonStates.Success]: [],
        [ButtonStates.Error]: [],
        [ButtonStates.Disabled]: ['pointer-events-none'],
      },
      display: {
        [ButtonDisplayStyles.Block]: ['block'],
        [ButtonDisplayStyles.Inline]: ['inline-block', 'align-middle'],
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
        [ButtonSizes.Small]: [heightProps.h['8']],
        [ButtonSizes.Medium]: [heightProps.h['9']],
      },
      type: {
        [ButtonTypes.Primary]: [
          'bg-earth-300',
          'hover:bg-earth-400',
          'focus:bg-earth-400',
          'active:bg-night',
        ],
        [ButtonTypes.Secondary]: [
          'bg-white',
          'hover:bg-earth-100',
          'focus:bg-earth-100',
          'active:bg-earth-200',
          'active:text-earth-400',
        ],
        [ButtonTypes.Minimal]: [
          'bg-white',
          'hover:bg-earth-100',
          'focus:bg-earth-100',
          'active:bg-earth-200',
          'active:text-earth-400',
        ],
        [ButtonTypes.Destructive]: [
          'bg-mars-300',
          'hover:bg-mars-400',
          'focus:bg-mars-400',
          'active:bg-mars-400',
          'active:text-mars-200',
        ],
      },
      state: {
        [ButtonStates.Initial]: [],
        [ButtonStates.Loading]: ['opacity-0'],
        [ButtonStates.Success]: ['opacity-0'],
        [ButtonStates.Error]: ['opacity-0'],
        [ButtonStates.Disabled]: [],
      },
    },
    compoundVariants: [
      {
        type: [ButtonTypes.Primary, ButtonTypes.Destructive],
        state: [
          ButtonStates.Initial,
          ButtonStates.Loading,
          ButtonStates.Success,
          ButtonStates.Error,
        ],
        class: ['text-white'],
      },
      {
        type: [ButtonTypes.Primary, ButtonTypes.Destructive],
        state: ButtonStates.Disabled,
        class: ['bg-meteor-100', 'text-meteor-400'],
      },
      {
        type: ButtonTypes.Secondary,
        state: [
          ButtonStates.Initial,
          ButtonStates.Loading,
          ButtonStates.Success,
          ButtonStates.Error,
        ],
        class: ['text-earth-300', 'shadow-inline-earth-300'],
      },
      {
        type: ButtonTypes.Secondary,
        state: ButtonStates.Disabled,
        class: ['text-meteor-300', 'shadow-inline-meteor-200'],
      },
      {
        type: ButtonTypes.Minimal,
        state: [
          ButtonStates.Initial,
          ButtonStates.Loading,
          ButtonStates.Success,
          ButtonStates.Error,
        ],
        class: ['text-earth-300'],
      },
      {
        type: ButtonTypes.Minimal,
        state: ButtonStates.Disabled,
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
        [ButtonTypes.Primary]: [],
        [ButtonTypes.Secondary]: [],
        [ButtonTypes.Minimal]: [],
        [ButtonTypes.Destructive]: [],
      },
      state: {
        [ButtonStates.Initial]: [],
        [ButtonStates.Loading]: [],
        [ButtonStates.Success]: [],
        [ButtonStates.Error]: [],
        [ButtonStates.Disabled]: [],
      },
    },
    compoundVariants: [
      {
        type: ButtonTypes.Primary,
        state: ButtonStates.Loading,
        class: ['bg-earth-200'],
      },
      {
        type: ButtonTypes.Secondary,
        state: ButtonStates.Loading,
        class: ['shadow-inline-earth-300', 'bg-earth-100', 'text-earth-300'],
      },
      {
        type: ButtonTypes.Minimal,
        state: ButtonStates.Loading,
        class: ['bg-earth-100'],
      },
      {
        type: ButtonTypes.Destructive,
        state: ButtonStates.Loading,
        class: ['bg-mars-200'],
      },
      {
        type: ButtonTypes.Primary,
        state: ButtonStates.Success,
        class: ['bg-neptune-300', 'text-white'],
      },
      {
        type: ButtonTypes.Secondary,
        state: ButtonStates.Success,
        class: [
          'shadow-inline-neptune-300',
          'bg-neptune-100',
          'text-neptune-300',
        ],
      },
      {
        type: ButtonTypes.Minimal,
        state: ButtonStates.Success,
        class: ['bg-neptune-100', 'text-neptune-300'],
      },
      {
        type: ButtonTypes.Destructive,
        state: ButtonStates.Success,
        class: ['bg-neptune-300', 'text-white'],
      },
      {
        type: ButtonTypes.Primary,
        state: ButtonStates.Error,
        class: ['bg-mars-300', 'text-white'],
      },
      {
        type: ButtonTypes.Secondary,
        state: ButtonStates.Error,
        class: ['shadow-inline-mars-300', 'bg-mars-100', 'text-mars-300'],
      },
      {
        type: ButtonTypes.Minimal,
        state: ButtonStates.Error,
        class: ['bg-mars-100', 'text-mars-300'],
      },
      {
        type: ButtonTypes.Destructive,
        state: ButtonStates.Error,
        class: ['bg-mars-300', 'text-white'],
      },
    ],
  },
)

const overlayIconVariants = cva([], {
  variants: {
    state: {
      [ButtonStates.Initial]: [],
      [ButtonStates.Loading]: ['animate-spin'],
      [ButtonStates.Success]: [],
      [ButtonStates.Error]: [],
      [ButtonStates.Disabled]: [],
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

export const buttonTextSizeMapping: {
  [key in ButtonSizes]: keyof typeof fontSizes
} = {
  [ButtonSizes.Small]: 'label-small-strong',
  [ButtonSizes.Medium]: 'body-small-strong',
}

export const buttonIconSizeMapping: {
  [key in ButtonSizes]: keyof typeof iconsizeProps.size
} = {
  [ButtonSizes.Small]: 'tiny',
  [ButtonSizes.Medium]: 'small',
}

export const buttonBadgeSizeMapping: { [key in ButtonSizes]: string } = {
  [ButtonSizes.Small]: 'large',
  [ButtonSizes.Medium]: 'huge',
}

export const buttonStateIconMapping: {
  [key in ButtonStates]: Icons | null
} = {
  [ButtonStates.Loading]: Icons.Spinner,
  [ButtonStates.Error]: Icons.Close,
  [ButtonStates.Success]: Icons.Check,
  [ButtonStates.Initial]: null,
  [ButtonStates.Disabled]: null,
}

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  testId?: string
  type?: ButtonTypes
  size?: ButtonSizes
  state?: ButtonStates
  display?: ButtonDisplayStyles
}

export {
  componentVariants,
  buttonVariants,
  buttonBodyVariants,
  overlayVariants,
  overlayIconVariants,
  textClassString,
}
