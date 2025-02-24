export const colorNames = [
  'night',
  'white',
  'deep-space',
  'earth-100',
  'earth-200',
  'earth-300',
  'earth-400',
  'sun-100',
  'sun-200',
  'sun-300',
  'sun-400',
  'mars-100',
  'mars-200',
  'mars-300',
  'mars-400',
  'neptune-100',
  'neptune-200',
  'neptune-300',
  'neptune-400',
  'nova-100',
  'nova-200',
  'nova-300',
  'nova-400',
  'mercury-100',
  'mercury-200',
  'mercury-300',
  'mercury-400',
  'aurora-100',
  'aurora-200',
  'aurora-300',
  'aurora-400',
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
