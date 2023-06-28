import Image from 'next/image'
import logoSpotify from '@/images/logos/spotify.svg'
import { useEffect, useState } from 'react'

export function Spotify() {
  const [nowPlaying, setNowPlaying] = useState('Not Playing')
  const [song, setSong] = useState({
    album: '',
    albumImageUrl: '',
    artist: 'Not Playing',
    isPlaying: false,
    songUrl: '',
    title: 'Not Playing',
  })

  useEffect(() => {
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSong(data)
      })
  }, [])

  return (
    <div
      onClick={() => window.open(song.songUrl, '_black', 'noreferrer')}
      className="flex gap-4 rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logoSpotify} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {song.title}
        </dd>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {song.artist}
        </dd>
      </dl>
    </div>
  )
}
