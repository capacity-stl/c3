import { cva, type VariantProps } from 'class-variance-authority'

const audioPlayerPropsVariants = {}

const audioPlayerVariants = cva('inline-block *:h-full *:w-auto', {
  variants: { ...audioPlayerPropsVariants },
  defaultVariants: {},
})

export interface audioPlayerProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof audioPlayerVariants> {
  src: string
  testId?: string
}

export { audioPlayerVariants }
