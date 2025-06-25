import { sizeProps } from './size.props'

const iconsizeProps = {
  size: {
    xsmall: 'size-3',
    tiny: 'size-4',
    small: 'size-5',
    medium: 'size-8',
    large: 'size-12',
    huge: 'size-16',
    ...sizeProps.size,
  },
}

export { iconsizeProps }
