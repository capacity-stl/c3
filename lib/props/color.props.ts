export const colorPalettes = {
  night: [],
  white: [],
  black: [],
  'deep-space': [],
  earth: [100, 200, 300, 400],
  sun: [100, 200, 300, 400],
  mars: [100, 200, 300, 400],
  meteor: [100, 200, 300, 400],
  neptune: [100, 200, 300, 400],
  nova: [100, 200, 300, 400],
  mercury: [100, 200, 300, 400],
  aurora: [100, 200, 300, 400],
}

export const colorNames = [
  'night',
  'white',
  'black',
  'deep-space',
  ...colorPalettes.earth.map((color) => `earth-${color}`),
  ...colorPalettes.sun.map((color) => `sun-${color}`),
  ...colorPalettes.mars.map((color) => `mars-${color}`),
  ...colorPalettes.meteor.map((color) => `meteor-${color}`),
  ...colorPalettes.neptune.map((color) => `neptune-${color}`),
  ...colorPalettes.nova.map((color) => `nova-${color}`),
  ...colorPalettes.mercury.map((color) => `mercury-${color}`),
  ...colorPalettes.aurora.map((color) => `aurora-${color}`),
]

const composeColorsWithPrefix = (prefix: string): { [key: string]: string } =>
  colorNames.reduce(
    (composed, colorName) => ({
      ...composed,
      [colorName]: `${prefix}-${colorName}`,
    }),
    {},
  )

const colorPropsComposed = composeColorsWithPrefix('text')
const bgColorPropsComposed = composeColorsWithPrefix('bg')
const borderColorPropsComposed = composeColorsWithPrefix('border')

const colorProps = {
  color: {
    ...colorPropsComposed,
  },
}

const bgColorProps = {
  bgColor: {
    ...bgColorPropsComposed,
  },
}

const borderColorProps = {
  borderColor: {
    ...borderColorPropsComposed,
  },
}

/** Type for background color prop values */
export type BgColorValue = (typeof colorNames)[number]

/** Interface for components that support background color props */
export interface BgColorPropTypes {
  /** Background color of the component */
  bgColor?: BgColorValue | null
}

/** Interface for components that support text color props */
export interface ColorPropTypes {
  /** Text color of the component */
  color?: BgColorValue | null
}

export { colorProps, bgColorProps, borderColorProps }
