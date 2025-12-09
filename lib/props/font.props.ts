const fontAlignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const fontSizes = {
  'heading-xl': 'text-3xl font-semibold leading-10', // 2.172 rem
  'heading-large': 'text-2xl font-semibold leading-8', // 1.5 rem
  heading: 'text-xl font-semibold leading-7', // 1.25 rem
  subheading: 'text-lg font-semibold leading-6', // 1.047 rem
  'body-large': 'font-normal text-lg leading-6', // 1.047 rem
  'body-strong': 'font-normal text-base font-medium leading-5', // 0.875 rem
  body: 'font-normal text-sm leading-5', // 0.875 rem
  'body-small': 'font-normal text-xs leading-4', // 0.734 rem
  'body-small-strong': 'text-xs font-semibold leading-4', // 0.734 rem
  'label-small': 'font-normal text-xs leading-3', // 0.734 rem
  'label-small-strong': 'text-xs font-semibold leading-3', // 0.734 rem
  'small-caps': 'text-xxs leading-3 tracking-wide uppercase font-semibold', // 0.625 rem
  code: 'text-sm leading-3', // 0.875 rem
  'code-small': 'text-xs leading-3', // 0.734 rem
}

const fontProps = {
  align: fontAlignments,
  type: fontSizes,
}

/** Type for font alignment prop values */
export type FontAlignValue = keyof typeof fontAlignments

/** Type for font type/size prop values */
export type FontTypeValue = keyof typeof fontSizes

/** Interface for components that support font props */
export interface FontPropTypes {
  /** Text alignment */
  align?: FontAlignValue | null
  /** Font type/size */
  type?: FontTypeValue | null
}

export { fontProps, fontSizes, fontAlignments }
