import { Slot } from '../Slot/Slot'
import { cn } from '../../utils/cn'
import { IconProps, iconVariants } from './Icon.props'
import { Glyphs, Icons } from './Glyphs'
import { Box } from '../Box/Box'
import { asTypes } from '../Box/Box.props'

const Icon = ({ className, icon, size = 'small', ...iconProps }: IconProps) => {
  return (
    <span
      className={cn(iconVariants({ size, ...iconProps }), className)}
      data-testid="icon-component"
    >
      <IconComponent icon={icon} />
    </span>
  )
}

const IconComponent = ({ icon }: { icon: string }) => {
  const glyph = Glyphs[icon]

  if (typeof glyph === 'function') {
    return <Slot>{Glyphs[icon]()}</Slot>
  } else {
    console.error(
      `Invalid icon name \`${icon}\`. For safety, use Icon.Glyph.{IconName}.\n\nAvailable icon names are: ${Object.keys(
        Icon.Glyph,
      ).join(', ')}`,
    )

    return (
      <Box
        as={asTypes.span}
        className="text-mars-300"
        title={`Invalid icon name \`${icon}\``}
      >
        {`!E`}
      </Box>
    )
  }
}

Icon.Glyph = Icons

export { Icon }
