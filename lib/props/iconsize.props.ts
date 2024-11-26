import { sizeProps } from './size.props'

const iconsizeProps = {
  size: {
    tiny: 'size-4',
    small: 'size-6',
    medium: 'size-9',
    large: 'size-12',
    huge: 'size-16',
    ...sizeProps.size,
  },
}

export { iconsizeProps }
