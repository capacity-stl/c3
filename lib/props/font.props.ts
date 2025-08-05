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
  'body-large': 'font-normal text-lg leading-6',
  'body-strong': 'font-normal text-base font-medium leading-5',
  body: 'font-normal text-base leading-5',
  'body-small': 'font-normal text-sm leading-4',
  'body-small-strong': 'text-sm font-medium leading-4',
  'label-small': 'font-normal text-xs leading-3',
  'label-small-strong': 'text-xs font-medium leading-3',
  'small-caps': 'text-xs leading-3 tracking-wide uppercase font-semibold',
  code: 'text-base leading-3',
  'code-small': 'text-sm leading-3',
}

const fontProps = {
  align: fontAlignments,
  type: fontSizes,
}

export { fontProps, fontSizes, fontAlignments }
