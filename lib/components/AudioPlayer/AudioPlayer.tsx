import { cn } from '@utils/cn'
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react'
import { audioPlayerProps, audioPlayerVariants } from './AudioPlayer.props'

const AudioPlayer = forwardRef(
  (
    { className, src, ...audioPlayerProps }: audioPlayerProps,
    ref: React.Ref<{ seek: (timestamp: number) => void }>,
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playbackRate, setPlaybackRate] = useState(1)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const seek = useCallback((timestamp: number) => {
      if (audioRef.current) {
        audioRef.current.currentTime = timestamp
      }
    }, [])

    useEffect(() => {
      const audio = audioRef.current
      if (!audio) return

      const handleLoadedMetadata = () => setDuration(audio.duration)

      const handleTimeUpdate = () =>
        setProgress((audio.currentTime / audio.duration) * 100)

      const handleEnded = () => {
        setIsPlaying(false)
      }

      audio.addEventListener('loadedmetadata', handleLoadedMetadata)
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('ended', handleEnded)

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('ended', handleEnded)
      }
    }, [])

    const play = useCallback(() => {
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }, [])

    const pause = useCallback(() => {
      if (audioRef.current) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }, [])

    const togglePlay = useCallback(() => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }, [isPlaying])

    const handlePlaybackRate = (rate: number) => {
      if (audioRef.current) {
        audioRef.current.playbackRate = rate
        setPlaybackRate(rate)
      }
    }

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!progressBarRef.current || !audioRef.current) return

      const rect = progressBarRef.current.getBoundingClientRect()
      const clickPosition = e.clientX - rect.left
      const percentageClicked = (clickPosition / rect.width) * 100
      const newTime = (duration * percentageClicked) / 100

      audioRef.current.currentTime = newTime
      setProgress(percentageClicked)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true)
      e.preventDefault()
    }

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging || !progressBarRef.current || !audioRef.current) return

        const rect = progressBarRef.current.getBoundingClientRect()
        const clickPosition = Math.max(
          0,
          Math.min(e.clientX - rect.left, rect.width),
        )
        const percentageClicked = (clickPosition / rect.width) * 100
        const newTime = (duration * percentageClicked) / 100

        audioRef.current.currentTime = newTime
        setProgress(percentageClicked)
      },
      [isDragging, duration],
    )

    const handleMouseUp = useCallback(() => {
      setIsDragging(false)
    }, [])

    useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }, [isDragging, handleMouseMove, handleMouseUp])

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    useImperativeHandle(
      ref,
      () => ({
        seek,
        play,
        pause,
        togglePlay,
      }),
      [seek, play, pause, togglePlay],
    )

    return (
      <div
        className={cn(
          audioPlayerVariants({ ...audioPlayerProps }),
          `${className} w-full select-none overflow-hidden`,
        )}
        data-testid={audioPlayerProps.testId}
        role="region"
        aria-label="Audio player"
      >
        <audio ref={audioRef} src={src} />

        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between text-sm font-semibold text-deep-space">
            <div
              aria-label={`Current time: ${formatTime(audioRef.current?.currentTime || 0)}`}
            >
              {formatTime(audioRef.current?.currentTime || 0)}
            </div>

            <div
              ref={progressBarRef}
              className="relative mx-4 my-2 h-1 w-full cursor-pointer rounded bg-meteor-200"
              onClick={handleSeek}
              role="slider"
              aria-label="Audio progress"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={audioRef.current?.currentTime || 0}
              aria-orientation="horizontal"
            >
              <div
                className="h-full rounded bg-earth-200"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-earth-300 shadow-md active:cursor-grabbing"
                style={{ left: `${progress}%` }}
                onMouseDown={handleMouseDown}
                role="slider"
                aria-label="Audio progress knob"
              />
            </div>

            <div aria-label={`Duration: ${formatTime(duration)}`}>
              {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={togglePlay}
              className="rounded p-2 text-white"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              aria-pressed={isPlaying}
            >
              <div className="flex items-center justify-center rounded-lg border border-earth-300 p-2 text-earth-300">
                {isPlaying ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    aria-hidden="true"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>

            <div
              role="group"
              aria-label="Playback speed controls"
              className="flex gap-2"
            >
              {[1, 1.5, 2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handlePlaybackRate(rate)}
                  className={`h-10 w-10 rounded-full ${playbackRate === rate ? 'bg-earth-300 text-white' : 'text-meteor-300 hover:bg-meteor-100 hover:text-meteor-400'}`}
                  aria-label={`Playback speed ${rate}x`}
                  aria-pressed={playbackRate === rate}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
)

AudioPlayer.displayName = 'AudioPlayer'

export { AudioPlayer }
