import { Slot } from '../Slot/Slot'
import { cn } from '../../utils/cn'
import { IconProps, iconVariants } from './Icon.props'
import { Glyphs, Icons } from './Glyphs'

const Icon = ({ className, icon, size = 'small', ...iconProps }: IconProps) => {
  return (
    <span
      className={cn(iconVariants({ size, ...iconProps }), className)}
      data-testid="icon-component"
    >
      <Slot>{Glyphs[icon]()}</Slot>
    </span>
  )
}

Icon.Glyph = Icons

export { Icon }
