import Image from 'next/image'
import logoSpotify from '@/images/logos/spotify.svg'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function Spotify() {
  const { data } = useSWR('/api/now-playing', fetcher, {
    refreshInterval: 5000,
  })

  const hasTrack = data && (data.isPlaying || data.lastPlayed)

  if (!hasTrack) {
    return null
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 rounded-2xl border border-zinc-100 p-6 transition hover:border-zinc-200 dark:border-zinc-700/40 dark:hover:border-zinc-700"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logoSpotify} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Song</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {data.title}
        </dd>
        <dt className="sr-only">Artist</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {data.isPlaying
            ? `${data.artist} • Playing now`
            : `${data.artist} • Last played`}
        </dd>
      </dl>
    </a>
  )
}
