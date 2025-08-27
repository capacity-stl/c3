export const incrementWithinBounds = (
  value: number | null,
  change: number,
  lbound: number,
  ubound: number,
  allowWrapping: boolean = true,
  nullInterstitial: boolean = false,
) => {
  console.log({
    value,
    change,
    lbound,
    ubound,
    allowWrapping,
    nullInterstitial,
  })
  if (value === null) {
    return change > 0 ? lbound - 1 + change : ubound + 1 + change
  }

  const newTarget = value + change

  if (newTarget > ubound) {
    if (allowWrapping) {
      return nullInterstitial ? null : lbound
    } else {
      return ubound
    }
  }

  if (newTarget < lbound) {
    if (allowWrapping) {
      return nullInterstitial ? null : ubound
    } else {
      return lbound
    }
  }

  return newTarget
}
