import { cn } from '../../utils/cn'
import {
  TextBoxProps,
  componentVariants,
  TextBoxSizes,
  TextBoxTypes,
  iconSizeMapping,
} from './TextBox.props'
import { Icon } from '../Icon/Icon'
import { Icons } from '../Icon/Glyphs'

const TextBox = (props: TextBoxProps) => {
  const {
    className,
    color,
    isError,
    leadingIcon,
    leadingIconColor,
    leadingIconSize,
    size,
    testId,
    trailingIcon,
    trailingIconColor,
    trailingIconSize,
    type,
    m,
    mx,
    my,
    mt,
    mb,
    mr,
    ml,
    w,
    wMax,
    wMin,
    h,
    hMax,
    hMin,
    ...textboxProps
  } = {
    color: 'night',
    isError: false,
    leadingIconColor: 'meteor-300',
    trailingIconColor: 'meteor-300',
    size: TextBoxSizes.Small,
    type: TextBoxTypes.Standard,
    ...props,
  }

  const leadingIconGlyph = Icon.Glyph[leadingIcon as keyof typeof Icons]
  const trailingIconGlyph = Icon.Glyph[trailingIcon as keyof typeof Icons]

  const hasLeadingIcon = leadingIcon ? Boolean(leadingIconGlyph) : false
  const hasTrailingIcon = trailingIcon ? Boolean(trailingIconGlyph) : false

  const { rootClassString, inputClassString, iconContainerClassString } =
    componentVariants({
      color,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      w,
      wMin,
      wMax,
      h,
      hMin,
      hMax,
      type,
      size,
      isError,
      hasLeadingIcon,
      hasTrailingIcon,
    })

  return (
    <div className={cn(rootClassString, className)} data-testid={testId}>
      {hasLeadingIcon ? (
        <div className={cn(iconContainerClassString, '-left-px')}>
          <Icon
            color={leadingIconColor}
            icon={leadingIconGlyph}
            size={leadingIconSize ?? iconSizeMapping[size]}
          />
        </div>
      ) : null}
      <input className={inputClassString} {...textboxProps} />
      {hasTrailingIcon ? (
        <div className={cn(iconContainerClassString, '-right-px')}>
          <Icon
            color={trailingIconColor}
            icon={trailingIconGlyph}
            size={trailingIconSize ?? iconSizeMapping[size]}
          />
        </div>
      ) : null}
    </div>
  )
}

TextBox.Sizes = TextBoxSizes
TextBox.Types = TextBoxTypes

export { TextBox }
