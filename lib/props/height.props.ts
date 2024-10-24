const heightKeys = ['h', 'min-h', 'max-h'] as const

const heightProps = {
  h: {
    full: 'h-full',
    screen: 'h-screen',
    auto: 'h-auto', // height: auto
    '0': 'h-0', // height: 0
    '1': 'h-1', // height: 0.25rem (4px)
    '2': 'h-2', // height: 0.5rem (8px)
    '3': 'h-3', // height: 0.75rem (12px)
    '4': 'h-4', // height: 1rem (16px)
    '5': 'h-5', // height: 1.25rem (20px)
    '6': 'h-6', // height: 1.5rem (24px)
    '7': 'h-7', // height: 1.75rem (28px)
    '8': 'h-8', // height: 2rem (32px)
    '9': 'h-9', // height: 2.25rem (36px)
    '1/4': 'h-1/4', // height: 25%
    '1/3': 'h-1/3', // height: 33.333333%
    '1/2': 'h-1/2', // height: 50%
    '2/3': 'h-2/3', // height: 66.666667%
    '3/4': 'h-3/4', // height: 75%
  },
  'min-h': {
    full: 'min-h-full',
    screen: 'min-h-screen',
    auto: 'min-h-auto', // min-height: auto
    '0': 'min-h-0', // min-height: 0
    '1': 'min-h-1', // min-height: 0.25rem (4px)
    '2': 'min-h-2', // min-height: 0.5rem (8px)
    '3': 'min-h-3', // min-height: 0.75rem (12px)
    '4': 'min-h-4', // min-height: 1rem (16px)
    '5': 'min-h-5', // min-height: 1.25rem (20px)
    '6': 'min-h-6', // min-height: 1.5rem (24px)
    '7': 'min-h-7', // min-height: 1.75rem (28px)
    '8': 'min-h-8', // min-height: 2rem (32px)
    '9': 'min-h-9', // min-height: 2.25rem (36px)
    '1/4': 'min-h-1/4', // min-height: 25%
    '1/3': 'min-h-1/3', // min-height: 33.333333%
    '1/2': 'min-h-1/2', // min-height: 50%
    '2/3': 'min-h-2/3', // min-height: 66.666667%
    '3/4': 'min-h-3/4', // min-height: 75%
  },
  'max-h': {
    full: 'max-h-full',
    screen: 'max-h-screen',
    auto: 'max-h-auto', // max-height: auto
    '0': 'max-h-0', // max-height: 0
    '1': 'max-h-1', // max-height: 0.25rem (4px)
    '2': 'max-h-2', // max-height: 0.5rem (8px)
    '3': 'max-h-3', // max-height: 0.75rem (12px)
    '4': 'max-h-4', // max-height: 1rem (16px)
    '5': 'max-h-5', // max-height: 1.25rem (20px)
    '6': 'max-h-6', // max-height: 1.5rem (24px)
    '7': 'max-h-7', // max-height: 1.75rem (28px)
    '8': 'max-h-8', // max-height: 2rem (32px)
    '9': 'max-h-9', // max-height: 2.25rem (36px)
    '1/4': 'max-h-1/4', // max-height: 25%
    '1/3': 'max-h-1/3', // max-height: 33.333333%
    '1/2': 'max-h-1/2', // max-height: 50%
    '2/3': 'max-h-2/3', // max-height: 66.666667%
    '3/4': 'max-h-3/4', // max-height: 75%
  },
}

export { heightProps, heightKeys }
