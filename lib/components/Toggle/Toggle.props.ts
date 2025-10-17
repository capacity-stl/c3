import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'

export const ToggleStates = {
  Default: 'default',
  Disabled: 'disabled',
  Error: 'error',
} as const

const containerVariants = cva(['flex', 'items-center', 'gap-2'], {
  variants: {
    ...marginProps,
  },
})

const trackVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'h-5',
    'w-8',
    'flex-shrink-0',
    'cursor-pointer',
    'rounded-full',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'p-0.5',
  ],
  {
    variants: {
      state: {
        [ToggleStates.Default]: [
          'bg-meteor-200',
          'hover:bg-meteor-300',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-earth-300',
          'focus:ring-offset-2',
        ],
        [ToggleStates.Disabled]: [
          'bg-meteor-200',
          'cursor-not-allowed',
          'opacity-50',
        ],
        [ToggleStates.Error]: [
          'bg-mars-200',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-mars-300',
          'focus:ring-offset-2',
        ],
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        state: ToggleStates.Default,
        checked: true,
        class: 'bg-neptune-300 hover:bg-meteor-200',
      },
      {
        state: ToggleStates.Error,
        checked: true,
        class: 'bg-mars-300',
      },
      {
        state: ToggleStates.Disabled,
        checked: true,
        class: 'bg-meteor-200',
      },
    ],
  },
)

const thumbVariants = cva(
  [
    'pointer-events-none',
    'inline-block',
    'h-4',
    'w-4',
    'transform',
    'rounded-full',
    'shadow-lg',
    'ring-0',
    'transition',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      checked: {
        true: 'translate-x-[12px]',
        false: 'translate-x-0',
      },
      state: {
        [ToggleStates.Default]: 'bg-white',
        [ToggleStates.Disabled]: 'bg-meteor-400',
        [ToggleStates.Error]: 'bg-white',
      },
    },
  },
)

const labelVariants = cva(
  ['select-none', 'cursor-pointer', 'leading-tight', 'text-sm'],
  {
    variants: {
      state: {
        [ToggleStates.Default]: ['text-night'],
        [ToggleStates.Disabled]: ['cursor-not-allowed', 'opacity-50'],
        [ToggleStates.Error]: ['text-mars-300'],
      },
    },
  },
)

const componentVariants = (props: object) => {
  return {
    containerClassString: containerVariants(props),
    trackClassString: trackVariants(props),
    thumbClassString: thumbVariants(props),
    labelClassString: labelVariants(props),
  }
}

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof containerVariants> {
  className?: string
  state?: 'default' | 'disabled' | 'error'
  label?: string
  testId?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export {
  containerVariants,
  trackVariants,
  thumbVariants,
  labelVariants,
  componentVariants,
}
