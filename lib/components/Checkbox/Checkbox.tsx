import { useEffect, useRef } from 'react'
import { cn } from '@utils/cn'
import {
  CheckboxProps,
  componentVariants,
  CheckboxStates,
} from './Checkbox.props'
import { Icon } from '@components/Icon/Icon'
import { Label } from '@components/Label/Label'

const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    state,
    label,
    testId,
    checked,
    defaultChecked,
    indeterminate,
    onChange,
    m,
    mx,
    my,
    mt,
    mb,
    mr,
    ml,
    ...checkboxProps
  } = {
    state: CheckboxStates.Default,
    indeterminate: false,
    ...props,
  }

  const checkboxRef = useRef<HTMLInputElement>(null)

  const { containerClassString, checkboxClassString, labelClassString } =
    componentVariants({
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      state,
    })

  const isDisabled = state === CheckboxStates.Disabled
  const checkboxId = checkboxProps.id || `checkbox-${testId || 'default'}`

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate || false
    }
  }, [indeterminate])

  return (
    <div className={cn(containerClassString, className)} data-testid={testId}>
      <div className="relative">
        <input
          ref={checkboxRef}
          type="checkbox"
          id={checkboxId}
          className={cn(checkboxClassString, 'peer')}
          disabled={isDisabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...checkboxProps}
        />
        <Icon
          icon={Icon.Glyph.Check}
          size="tiny"
          color="white"
          className={cn(
            'pointer-events-none absolute inset-0 m-auto transition-opacity',
            indeterminate ? 'opacity-0' : 'opacity-0 peer-checked:opacity-100',
          )}
        />
        {indeterminate && (
          <Icon
            icon={Icon.Glyph.Minus}
            size="tiny"
            color="white"
            className="pointer-events-none absolute inset-0 m-auto opacity-100 transition-opacity"
          />
        )}
      </div>
      {label && (
        <Label htmlFor={checkboxId} className={labelClassString}>
          {label}
        </Label>
      )}
    </div>
  )
}

Checkbox.State = CheckboxStates

export { Checkbox }
