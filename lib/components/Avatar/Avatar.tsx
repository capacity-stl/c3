import React, { useEffect, useState, ReactNode } from 'react'
import { cn } from '@utils/cn'
import { AvatarProps, avatarVariants } from './Avatar.props'

/**
 * Extracts text from children in case an html element is passed
 */
const extractChildrenText = (children: ReactNode): string => {
  if (typeof children === 'string') return children
  if (React.isValidElement<{ children?: ReactNode }>(children)) {
    return extractChildrenText(children.props.children as ReactNode)
  }
  return ''
}

const Avatar = ({
  className,
  src,
  alt = 'avatar',
  children = '?',
  ...avatarProps
}: AvatarProps) => {
  // Merge default and given props to override null values (not avoidable with default values in destructuring)
  const mergedProps: typeof avatarProps = {
    ...avatarProps,
    size: avatarProps.size ?? 'medium',
    shape: avatarProps.shape ?? 'circle',
    testId: avatarProps.testId ?? 'avatar-component',
    ...(avatarProps.theme
      ? {
          theme: avatarProps.theme ?? 'earth',
          color: avatarProps.color,
          bgColor: avatarProps.bgColor,
          borderColor: avatarProps.borderColor,
        }
      : {
          color: avatarProps.color ?? 'white',
          bgColor: avatarProps.bgColor ?? 'earth-300',
          borderColor: avatarProps.borderColor ?? 'night',
        }),
  }

  const [imageValid, setImageValid] = useState(true)
  useEffect(() => setImageValid(true), [src])

  const fallbackText = extractChildrenText(children)

  return (
    <>
      <span
        className={cn(
          avatarVariants({ ...mergedProps }),
          `${className} select-none overflow-hidden`,
        )}
        data-testid={mergedProps.testId}
        // This is a workaround to fix the container type for the avatar component that is not supported in tailwind v3
        style={{ containerType: 'inline-size' }}
      >
        {src && imageValid ? (
          <img src={src} alt={alt} onError={() => setImageValid(false)} />
        ) : (
          <span
            className="flex items-center justify-center font-semibold uppercase"
            // This is a workaround to fix the container type for the avatar component that is not supported in tailwind v3
            style={{ fontSize: '40cqw', lineHeight: '0' }}
          >
            {fallbackText}
          </span>
        )}
      </span>
    </>
  )
}

export { Avatar }
