const borderRadiusProps = {
  borderRadius: {
    tiny: 'rounded-xs',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
  },
}

/** Type for border radius prop values */
export type BorderRadiusValue = keyof typeof borderRadiusProps.borderRadius

/** Interface for components that support border radius props */
export interface BorderRadiusPropTypes {
  /** Border radius of the component */
  borderRadius?: BorderRadiusValue | null
}

export { borderRadiusProps }
