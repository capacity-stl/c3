import { cn } from '@utils/cn'
import { TemplateNameProps, TemplateNameVariants } from './TemplateName.props'

const TemplateName = ({
  className,
  children,
  ...TemplateNameProps
}: TemplateNameProps) => {
  const mergedProps = {
    ...TemplateNameProps,
    testId: TemplateNameProps.testId ?? 'text-component',
  }

  return (
    <div className={cn(TemplateNameVariants({ ...mergedProps }), className)}>
      {children}
    </div>
  )
}

export { TemplateName }
