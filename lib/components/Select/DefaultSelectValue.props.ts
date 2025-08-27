import { cva, type VariantProps } from 'class-variance-authority'
import { fontSizes } from '@props/font.props'
import {
  SelectItemType,
  SelectItemsType,
  KeyMappingShape,
  RenderItemType,
} from './Select.props'

const rootVariants = cva(['flex-auto', 'flex', 'gap-2', 'items-center'], {
  variants: {},
})

const leadingIconVariants = cva(['flex', 'items-center'], {
  variants: {},
})

const trailingIconVariants = cva(['flex', 'items-center'], {
  variants: {},
})

const labelContainerVariants = cva([], {
  variants: {},
})

const labelVariants = cva([], {
  variants: {},
})

const subLabelVariants = cva(['mt-1', 'opacity-75', fontSizes['label-small']], {
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

export interface DefaultSelectValueProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rootVariants> {
  selected: SelectItemType | SelectItemsType
  placeholder: string
  dataKeyMapping: KeyMappingShape
  selectAsChips?: boolean
  renderItem: RenderItemType
}

export {
  rootVariants,
  leadingIconVariants,
  trailingIconVariants,
  labelContainerVariants,
  labelVariants,
  subLabelVariants,
  componentVariants,
}
