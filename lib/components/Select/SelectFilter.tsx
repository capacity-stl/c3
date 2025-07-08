import { forwardRef, Ref } from 'react'
import { ChangeEvent } from 'react'
import {
  SelectFilterEnums,
  SelectFilterProps,
  componentVariants,
} from './SelectFilter.props'

const SelectFilter = forwardRef(
  (props: SelectFilterProps, ref: Ref<HTMLInputElement>) => {
    const {
      onChange,
      filterBehavior,
      itemCount,
      filterValue,
      filterPlaceholder,
    } = {
      filterValue: '',
      onChange: () => {},
      ...props,
    }
    const { rootClassString, inputClassString } = componentVariants(props)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value)

    if (
      filterBehavior === SelectFilterEnums.Search ||
      filterBehavior === SelectFilterEnums.Filter ||
      (filterBehavior === SelectFilterEnums.AdaptiveFilter && itemCount > 10)
    ) {
      return (
        <div className={rootClassString}>
          <input
            className={inputClassString}
            onChange={handleChange}
            placeholder={filterPlaceholder}
            ref={ref}
            value={filterValue}
          />
        </div>
      )
    }

    return null
  },
)

export { SelectFilter }
