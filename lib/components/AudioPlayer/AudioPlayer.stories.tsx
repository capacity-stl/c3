import type { Meta, StoryObj } from '@storybook/react'
import { AudioPlayer } from './AudioPlayer'
import { useRef } from 'react'

import audioFile from '../../../public/audio_pcm_16bit_8khz.wav'

const meta = {
  title: 'Data Display/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    docs: {
      description: {
        component: 'An audio player component.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL or path to the audio file',
    },
  },
} satisfies Meta<typeof AudioPlayer>

export default meta
type Story = StoryObj<typeof meta>

const AudioPlayerConversation = (args: Story['args']) => {
  const audioPlayerRef = useRef<{
    seek: (timestamp: number) => void
    play: () => void
    pause: () => void
  }>(null)

  return (
    <div className="flex flex-col justify-center gap-4">
      <button
        onClick={() => audioPlayerRef.current?.seek(0)}
        className="hover:bg-meteor-100 p-2 text-left"
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="font-bold">Speaker 1</div>
          <div className="text-meteor-300">0:00</div>
        </div>
        <div>
          Figure two shows an example of processing of speech using human ear
          models. He acted swiftly when his time came. Taking Lowell Miller.
        </div>
      </button>
      <button
        onClick={() => audioPlayerRef.current?.seek(7)}
        className="hover:bg-meteor-100 p-2 text-left"
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="font-bold">Speaker 2</div>
          <div className="text-meteor-300">0:07</div>
        </div>
        <div>
          Last year in the NBA playoffs, the bullets humiliated themselves
          against Detroit.
        </div>
      </button>
      <button
        onClick={() => audioPlayerRef.current?.seek(11)}
        className="hover:bg-meteor-100 p-2 text-left"
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="font-bold">Speaker 3</div>
          <div className="text-meteor-300">0:11</div>
        </div>
        <div>
          Control activities will entail some new faces from within Ford for the
          first time in ten years. Research and development funding. In the
          federal budget, programs use proprietary Macintosh graphic displays.
        </div>
      </button>

      <div className="flex justify-center gap-2">
        <button
          // eslint-disable-next-line storybook/context-in-play-function
          onClick={() => audioPlayerRef.current?.play()}
          className="border-meteor-300 text-meteor-300 rounded-md border p-2"
        >
          External Play
        </button>
        <button
          onClick={() => audioPlayerRef.current?.pause()}
          className="border-meteor-300 text-meteor-300 rounded-md border p-2"
        >
          External Pause
        </button>
      </div>

      <hr className="my-4" />

      <div className="flex justify-center">
        <AudioPlayer className="max-w-3/4" {...args} ref={audioPlayerRef} />
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {
    src: audioFile,
  },
}

export const Conversation: Story = {
  args: {
    src: audioFile,
  },
  render: (args) => <AudioPlayerConversation {...args} />,
}
