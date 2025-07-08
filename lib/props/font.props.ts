const fontAlignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const fontSizes = {
  'heading-xl': 'text-3xl font-semibold leading-10',
  'heading-large': 'text-2xl font-semibold leading-8',
  heading: 'text-xl font-semibold leading-7',
  subheading: 'text-lg font-semibold leading-6',
  'body-large': 'text-lg leading-6',
  'body-strong': 'text-base font-medium leading-5',
  body: 'text-base leading-5',
  'body-small': 'text-sm leading-4',
  'body-small-strong': 'text-sm font-medium leading-4',
  'small-caps': 'text-xs leading-3 tracking-wide uppercase font-semibold',
  code: 'text-base leading-3',
  'code-small': 'text-sm leading-3',
}

const fontProps = {
  align: fontAlignments,
  type: fontSizes,
}

export { fontProps, fontSizes, fontAlignments }
