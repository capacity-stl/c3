import { cva, type VariantProps } from 'class-variance-authority'
import { fontSizes } from '@props/font.props'
import { KeyMappingShape, SelectItemType } from './Select.props'

const rootVariants = cva(
  ['relative', 'bg-white', 'flex', 'gap-2', 'p-2', 'items-center'],
  {
    variants: {
      isActive: {
        true: ['bg-meteor-200', 'border-earth'],
        false: [],
      },
      isSelected: {
        true: ['bg-earth-300', 'text-white'],
        false: [],
      },
    },
    compoundVariants: [
      {
        isActive: true,
        isSelected: true,
        class: ['bg-earth-400'],
      },
    ],
  },
)

const leadingIconVariants = cva([], {
  variants: {},
})

const trailingIconVariants = cva([], {
  variants: {},
})

const labelContainerVariants = cva([], {
  variants: {},
})

const labelVariants = cva([], {
  variants: {},
})

const subLabelVariants = cva(['opacity-75', fontSizes['body-small']], {
  variants: {},
})

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
    leadingIconClassString: leadingIconVariants(props),
    trailingIconClassString: trailingIconVariants(props),
    labelContainerClassString: labelContainerVariants(props),
    labelClassString: labelVariants(props),
    subLabelClassString: subLabelVariants(props),
  }
}

export interface DefaultSelectItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    VariantProps<typeof rootVariants> {
  dataKeyMapping: KeyMappingShape
  index: number
  item: SelectItemType
  onHover: (index: number) => void
  onSelect: (item: SelectItemType, index: number, isSelected: boolean) => void
  isActive?: boolean
  isSelected?: boolean
}

export {
  rootVariants,
  leadingIconVariants,
  trailingIconVariants,
  labelContainerVariants,
  componentVariants,
}
