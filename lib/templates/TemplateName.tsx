import { cn } from '@utils/cn'
import { TemplateNameProps, TemplateNameVariants } from './TemplateName.props'

const TemplateName = ({
  className,
  children,
  ...TemplateNameProps
}: TemplateNameProps) => {
  return (
    <div
      className={cn(TemplateNameVariants({ ...TemplateNameProps }), className)}
    >
      {children}
    </div>
  )
}

export { TemplateName }
