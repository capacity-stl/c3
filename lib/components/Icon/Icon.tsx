import { Slot } from '@components/Slot/Slot'
import { cn } from '@utils/cn'
import { IconProps, iconVariants, asTypes } from './Icon.props'
import { Glyphs, Icons } from './Glyphs'

const Icon = ({
  className,
  icon,
  size = 'small',
  as: Tag = asTypes.span,
  testId,
  ...iconProps
}: IconProps) => {
  const rootClassString = iconVariants({ size, as: Tag, ...iconProps })

  return (
    <Tag className={cn(rootClassString, className)} data-testid={testId}>
      <IconComponent icon={icon} />
    </Tag>
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
      <div className="text-mars-300" title={`Invalid icon name \`${icon}\``}>
        {`!E`}
      </div>
    )
  }
}

Icon.Glyph = Icons
Icon.asType = asTypes

export { Icon }
