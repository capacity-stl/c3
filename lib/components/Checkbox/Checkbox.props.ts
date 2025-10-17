import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { marginProps } from '@props/margin.props'

export const CheckboxStates = {
  Default: 'default',
  Disabled: 'disabled',
  Error: 'error',
} as const

const containerVariants = cva(['flex', 'items-center', 'gap-2'], {
  variants: {
    ...marginProps,
  },
})

const checkboxVariants = cva(
  [
    'appearance-none',
    'border-2',
    'border-solid',
    'rounded-xs',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'bg-white',
    'flex-shrink-0',
    'w-5',
    'h-5',
  ],
  {
    variants: {
      state: {
        [CheckboxStates.Default]: [
          'border-meteor-300',
          'hover:border-earth-300',
          'focus:outline-none',
          'focus:shadow-outline-focus',
          'checked:bg-earth-300',
          'checked:border-earth-300',
        ],
        [CheckboxStates.Disabled]: [
          'border-meteor-200',
          'cursor-not-allowed',
          'opacity-50',
          'checked:bg-meteor-200',
          'checked:border-meteor-200',
        ],
        [CheckboxStates.Error]: [
          'border-mars-300',
          'focus:outline-none',
          'focus:shadow-outline-error',
          'checked:bg-mars-300',
          'checked:border-mars-300',
        ],
      },
    },
  },
)

const labelVariants = cva(
  ['select-none', 'text-night', 'cursor-pointer', 'leading-tight', 'text-sm'],
  {
    variants: {
      state: {
        [CheckboxStates.Default]: [],
        [CheckboxStates.Disabled]: ['cursor-not-allowed', 'opacity-50'],
        [CheckboxStates.Error]: ['text-mars-300'],
      },
    },
  },
)

const componentVariants = (props: object) => {
  return {
    containerClassString: containerVariants(props),
    checkboxClassString: checkboxVariants(props),
    labelClassString: labelVariants(props),
  }
}

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof containerVariants> {
  className?: string
  state?: 'default' | 'disabled' | 'error'
  label?: string
  testId?: string
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export { containerVariants, checkboxVariants, labelVariants, componentVariants }
