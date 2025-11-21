import { useState } from 'react'
import { cn } from '@utils/cn'
import { ToggleProps, componentVariants, ToggleStates } from './Toggle.props'
import { Label } from '../Label/Label'
const Toggle = (props: ToggleProps) => {
  const {
    className,
    state,
    label,
    testId,
    checked,
    defaultChecked,
    onChange,
    m,
    mx,
    my,
    mt,
    mb,
    mr,
    ml,
    ...toggleProps
  } = {
    state: ToggleStates.Default,
    ...props,
  }

  // Track internal checked state for styling
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked || checked || false,
  )

  const isControlled = checked !== undefined
  const isChecked = isControlled ? checked : internalChecked

  const {
    containerClassString,
    trackClassString,
    thumbClassString,
    labelClassString,
  } = componentVariants({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    state,
    checked: isChecked,
  })

  const isDisabled = state === ToggleStates.Disabled
  const toggleId = toggleProps.id || `toggle-${testId || 'default'}`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked)
    }
    onChange?.(event)
  }

  return (
    <div className={cn(containerClassString, className)} data-testid={testId}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={label ? `${toggleId}-label` : undefined}
        className={trackClassString}
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) {
            const syntheticEvent = {
              target: { checked: !isChecked },
              currentTarget: { checked: !isChecked },
            } as React.ChangeEvent<HTMLInputElement>
            handleChange(syntheticEvent)
          }
        }}
      >
        <span className={thumbClassString} />
        <input
          type="checkbox"
          id={toggleId}
          className="sr-only"
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          {...toggleProps}
        />
      </button>
      {label && (
        <Label
          id={`${toggleId}-label`}
          htmlFor={toggleId}
          className={labelClassString}
        >
          {label}
        </Label>
      )}
    </div>
  )
}

Toggle.State = ToggleStates

export { Toggle }
