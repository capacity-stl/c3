import { cva, type VariantProps } from 'class-variance-authority'

import { marginProps } from '@props/margin.props'
import { paddingProps } from '@props/padding.props'
import { heightProps } from '@props/height.props'
import { widthProps } from '@props/width.props'
import { borderProps } from '@props/border.props'
import { sizeProps } from '@props/size.props'
import { colorProps } from '@props/color.props'
import { fontSizes } from '@props/font.props'

export const TextBoxSizes = {
  Small: 'small',
  Medium: 'medium',
} as { [key: string]: 'small' | 'medium' }

export const TextBoxTypes = {
  Standard: 'standard',
  Shadow: 'shadow',
} as { [key: string]: 'standard' | 'shadow' }

export const iconSizeMapping = {
  [TextBoxSizes.Small]: 'tiny',
  [TextBoxSizes.Medium]: 'small',
} as { [key: string]: 'tiny' | 'small' }

const rootVariants = cva(['relative', 'bg-white', 'w-72'], {
  variants: {
    type: {
      [TextBoxTypes.Standard]: [borderProps.border.focusWithin],
      [TextBoxTypes.Shadow]: [
        'shadow-contact',
        'focus-within:shadow-contact-focus',
        borderProps.border.transparent,
      ],
    },
    size: {
      [TextBoxSizes.Small]: [
        heightProps.h['9'],
        'rounded-lg',
        fontSizes['body-small'],
      ],
      [TextBoxSizes.Medium]: [
        heightProps.h['11'],
        'rounded-xl',
        fontSizes['body'],
      ],
    },
    hasLeadingIcon: { true: '', false: '' },
    hasTrailingIcon: { true: '', false: '' },
    isError: { true: '', false: '' },
    ...marginProps,
    ...widthProps,
  },
  compoundVariants: [
    {
      type: TextBoxTypes.Standard,
      isError: true,
      class: [borderProps.border.error],
    },
    {
      type: TextBoxTypes.Shadow,
      isError: true,
      class: [
        'shadow-contact-error',
        'focus-within:shadow-contact-focus',
        borderProps.border.transparent,
      ],
    },
  ],
})

const inputVariants = cva(
  ['h-full', 'w-full', 'bg-transparent', 'absolute', 'focus:outline-none'],
  {
    variants: {
      size: {
        [TextBoxSizes.Small]: [paddingProps.py['2']],
        [TextBoxSizes.Medium]: [paddingProps.py['3']],
      },
      hasLeadingIcon: { true: '', false: '' },
      hasTrailingIcon: { true: '', false: '' },
      ...colorProps,
    },
    compoundVariants: [
      {
        size: TextBoxSizes.Small,
        hasLeadingIcon: false,
        class: `${paddingProps.pl['2']}`,
      },
      {
        size: TextBoxSizes.Small,
        hasTrailingIcon: false,
        class: `${paddingProps.pr['2']}`,
      },
      {
        size: TextBoxSizes.Small,
        hasLeadingIcon: true,
        class: `${paddingProps.pl['9']}`,
      },
      {
        size: TextBoxSizes.Small,
        hasTrailingIcon: true,
        class: `${paddingProps.pr['9']}`,
      },
      {
        size: TextBoxSizes.Medium,
        hasLeadingIcon: false,
        class: `${paddingProps.pl['3']}`,
      },
      {
        size: TextBoxSizes.Medium,
        hasTrailingIcon: false,
        class: `${paddingProps.pr['3']}`,
      },
      {
        size: TextBoxSizes.Medium,
        hasLeadingIcon: true,
        class: `${paddingProps.pl['11']}`,
      },
      {
        size: TextBoxSizes.Medium,
        hasTrailingIcon: true,
        class: `${paddingProps.pr['11']}`,
      },
    ],
  },
)

const iconContainerVariants = cva(
  [
    'absolute',
    'flex',
    'items-center',
    'justify-center',
    '-top-px',
    'pointer-events-none',
  ],
  {
    variants: {
      size: {
        [TextBoxSizes.Small]: [sizeProps.size['9']],
        [TextBoxSizes.Medium]: [sizeProps.size['11']],
      },
    },
  },
)

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    inputClassString: inputVariants(props),
    iconContainerClassString: iconContainerVariants(props),
  }
}

export interface TextBoxProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof rootVariants> {
  className?: string
  color?: string
  isError?: boolean
  leadingIcon?: string
  leadingIconColor?: string
  placeholder?: string
  size?: 'small' | 'medium'
  testId?: string
  trailingIcon?: string
  trailingIconColor?: string
  value?: string
}

export { rootVariants, inputVariants, iconContainerVariants, componentVariants }
