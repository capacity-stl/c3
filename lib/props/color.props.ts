export const colorPalletes = {
  night: [],
  white: [],
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
  'deep-space',
  ...colorPalletes.earth.map((color) => `earth-${color}`),
  ...colorPalletes.sun.map((color) => `sun-${color}`),
  ...colorPalletes.mars.map((color) => `mars-${color}`),
  ...colorPalletes.meteor.map((color) => `meteor-${color}`),
  ...colorPalletes.neptune.map((color) => `neptune-${color}`),
  ...colorPalletes.nova.map((color) => `nova-${color}`),
  ...colorPalletes.mercury.map((color) => `mercury-${color}`),
  ...colorPalletes.aurora.map((color) => `aurora-${color}`),
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

export { colorProps, bgColorProps, borderColorProps }
