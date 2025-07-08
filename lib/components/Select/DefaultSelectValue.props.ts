import { cva, type VariantProps } from 'class-variance-authority'
import {
  SelectItemType,
  SelectItemsType,
  KeyMappingShape,
  DecoratorsGenerator,
} from './Select.props'

const rootVariants = cva(['flex-auto'], {
  variants: {},
})

const componentVariants = (props: object) => {
  return {
    rootClassString: rootVariants(props),
  }
}

export interface DefaultSelectValueProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rootVariants> {
  selected: SelectItemType | SelectItemsType
  placeholder: string
  dataKeyMapping: KeyMappingShape
  selectAsChips?: boolean
  getDecoratorsForItem?: DecoratorsGenerator
}

export { rootVariants, componentVariants }
