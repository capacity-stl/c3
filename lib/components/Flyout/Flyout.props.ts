import { cva, type VariantProps } from 'class-variance-authority'

type CVAProps = {
  open: boolean
  boundingRect: null | DOMRect
}

const rootVariants = cva(
  [
    'bg-white',
    'shadow-medium',
    'min-w-full',
    'rounded-sm',
    'overflow-y-auto',
    'max-h-80',
    'mt-1',
  ],
  {
    variants: {
      isPinned: { true: ['fixed'], false: ['absolute', 'top-full', 'left-0'] },
    },
  },
)

const componentVariants = (props: CVAProps) => {
  const cvaProps = {
    isPinned: Boolean(props.boundingRect),
  }

  return {
    rootClassString: rootVariants(cvaProps),
  }
}

export interface FlyoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rootVariants> {
  open: boolean
  pinTo?: React.RefObject<HTMLElement | null>
}

export { rootVariants, componentVariants }
