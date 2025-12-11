import { cn } from '../../utils/cn'
import { FlexProps, flexVariants } from './Flex.props'

const Flex = ({
  as: Component = 'div',
  className,
  children,
  testId = 'flex-component',
  // Extract variant props so they are not spread to the DOM
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  h,
  hMin,
  hMax,
  w,
  wMin,
  wMax,
  bgColor,
  border,
  borderRadius,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  direction,
  wrap,
  grow,
  shrink,
  basis,
  flex,
  gap,
  gapX,
  gapY,
  justify,
  align,
  alignContent,
  alignSelf,
  order,
  ...htmlProps
}: FlexProps) => {
  const variantProps = {
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    h,
    hMin,
    hMax,
    w,
    wMin,
    wMax,
    bgColor,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    flex,
    gap,
    gapX,
    gapY,
    justify,
    align,
    alignContent,
    alignSelf,
    order,
  }

  return (
    <Component
      className={cn(flexVariants(variantProps), className)}
      data-testid={testId}
      {...htmlProps}
    >
      {children}
    </Component>
  )
}

export { Flex }
