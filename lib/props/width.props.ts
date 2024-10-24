const widthKeys = ['w', 'min-w', 'max-w'] as const

const widthProps = {
  w: {
    full: 'w-full', // width: 100%
    screen: 'w-screen', // width: 100vh
    auto: 'w-auto', // width: auto
    '0': 'w-0', // width: 0
    '1': 'w-1', // width: 0.25rem (4px)
    '2': 'w-2', // width: 0.5rem (8px)
    '3': 'w-3', // width: 0.75rem (12px)
    '4': 'w-4', // width: 1rem (16px)
    '5': 'w-5', // width: 1.25rem (20px)
    '6': 'w-6', // width: 1.5rem (24px)
    '7': 'w-7', // width: 1.75rem (28px)
    '8': 'w-8', // width: 2rem (32px)
    '9': 'w-9', // width: 2.25rem (36px)
    '1/4': 'w-1/4', // width: 25%
    '1/3': 'w-1/3', // width: 33.333333%
    '1/2': 'w-1/2', // width: 50%
    '2/3': 'w-2/3', // width: 66.666667%
    '3/4': 'w-3/4', // width: 75%
  },
  'min-w': {
    full: 'min-w-full', // min-width: 100%
    screen: 'min-w-screen', // min-width: 100vh
    auto: 'min-w-auto', // min-width: auto
    '0': 'min-w-0', // min-width: 0
    '1': 'min-w-1', // min-width: 0.25rem (4px)
    '2': 'min-w-2', // min-width: 0.5rem (8px)
    '3': 'min-w-3', // min-width: 0.75rem (12px)
    '4': 'min-w-4', // min-width: 1rem (16px)
    '5': 'min-w-5', // min-width: 1.25rem (20px)
    '6': 'min-w-6', // min-width: 1.5rem (24px)
    '7': 'min-w-7', // min-width: 1.75rem (28px)
    '8': 'min-w-8', // min-width: 2rem (32px)
    '9': 'min-w-9', // min-width: 2.25rem (36px)
    '1/4': 'min-w-1/4', // min-width: 25%
    '1/3': 'min-w-1/3', // min-width: 33.333333%
    '1/2': 'min-w-1/2', // min-width: 50%
    '2/3': 'min-w-2/3', // min-width: 66.666667%
    '3/4': 'min-w-3/4', // min-width: 75%
  },
  'max-w': {
    full: 'max-w-full', // max-width: 100%
    screen: 'max-w-screen', // max-width: 100vh
    auto: 'max-w-auto', // max-width: auto
    '0': 'max-w-0', // max-width: 0
    '1': 'max-w-1', // max-width: 0.25rem (4px)
    '2': 'max-w-2', // max-width: 0.5rem (8px)
    '3': 'max-w-3', // max-width: 0.75rem (12px)
    '4': 'max-w-4', // max-width: 1rem (16px)
    '5': 'max-w-5', // max-width: 1.25rem (20px)
    '6': 'max-w-6', // max-width: 1.5rem (24px)
    '7': 'max-w-7', // max-width: 1.75rem (28px)
    '8': 'max-w-8', // max-width: 2rem (32px)
    '9': 'max-w-9', // max-width: 2.25rem (36px)
    '1/4': 'max-w-1/4', // max-width: 25%
    '1/3': 'max-w-1/3', // max-width: 33.333333%
    '1/2': 'max-w-1/2', // max-width: 50%
    '2/3': 'max-w-2/3', // max-width: 66.666667%
    '3/4': 'max-w-3/4', // max-width: 75%
  },
}

export { widthProps, widthKeys }
