import { ReactNode, isValidElement } from 'react'
import { cn } from '@utils/cn'
import {
  ButtonProps,
  componentVariants,
  textClassString,
  buttonStateIconMapping,
  buttonIconSizeMapping,
  buttonTextSizeMapping,
  buttonBadgeSizeMapping,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_STATES,
  BUTTON_DISPLAY_STYLES,
} from './Button.props'
import { Text } from '@components/Text/Text'
import { Icon } from '@components/Icon/Icon'
import { BadgeDot } from '@components/BadgeDot/BadgeDot'

const processChildNode = (
  childNode: ReactNode,
  size: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES],
) => {
  if (typeof childNode === 'string')
    return (
      <Text
        as="span"
        className={textClassString}
        type={buttonTextSizeMapping[size]}
      >
        {childNode}
      </Text>
    )

  if (isValidElement(childNode)) {
    const nodeType = childNode.type

    switch (nodeType) {
      case Text:
      case 'span':
        return (
          <Text
            as="span"
            className={cn(textClassString, childNode.props?.className)}
            type={buttonTextSizeMapping[size]}
          >
            {childNode.props.children}
          </Text>
        )
      case Icon:
        return <Icon size={buttonIconSizeMapping[size]} {...childNode.props} />
      case BadgeDot:
        return (
          <BadgeDot
            color="transparent-dark"
            shape="rounded"
            size={buttonBadgeSizeMapping[size]}
            {...childNode.props}
          />
        )
    }
  }

  return childNode
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    state,
    size,
    testId,
    type,
    display,
    title,
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
    ...buttonProps
  } = {
    state: BUTTON_STATES.Initial,
    size: BUTTON_SIZES.Small,
    type: BUTTON_TYPES.Primary,
    display: BUTTON_DISPLAY_STYLES.Inline,
    ...props,
  }

  const {
    buttonClassString,
    buttonBodyClassString,
    overlayClassString,
    overlayIconClassString,
  } = componentVariants({
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
    type,
    size,
    state,
    display,
  })

  const stateIcon = buttonStateIconMapping[state]
  const isDisabled =
    state === BUTTON_STATES.Disabled || state === BUTTON_STATES.Loading

  const renderChildren = Array.isArray(children)
    ? children.map((childNode) => {
        return processChildNode(childNode, size)
      })
    : processChildNode(children, size)

  return (
    <button
      className={cn(buttonClassString, className)}
      data-testid={testId}
      disabled={isDisabled}
      title={title}
      aria-label={title}
      {...buttonProps}
    >
      <div className={buttonBodyClassString}>{renderChildren}</div>
      {stateIcon ? (
        <div className={overlayClassString}>
          <Icon
            className={overlayIconClassString}
            icon={stateIcon}
            size={buttonIconSizeMapping[size]}
          />
        </div>
      ) : null}
    </button>
  )
}

Button.Type = BUTTON_TYPES
Button.Size = BUTTON_SIZES
Button.State = BUTTON_STATES
Button.Display = BUTTON_DISPLAY_STYLES

export { Button }
