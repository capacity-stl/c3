import { cn } from '../../utils/cn'
import { GridProps, gridVariants } from './Grid.props'

const Grid = ({ className, children, ...gridProps }: GridProps) => {
  return (
    <div className={cn(gridVariants({ ...gridProps }), className)}>
      {children}
    </div>
  )
}

export { Grid }
