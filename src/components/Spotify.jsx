import Image from 'next/image'
import logoSpotify from '@/images/logos/spotify.svg'
import { useState } from 'react'
import useSWR from 'swr'

export function Spotify() {
  const fetcher = (...args) =>
    fetch('/api/now-playing').then((res) => res.json())

  const { data, error } = useSWR('/api/profile-data', fetcher, {
    refreshInterval: 5000,
  })

  return (
    <div
      onClick={() =>
        window.open(
          !data ? 'Not Playing' : data.songUrl,
          '_black',
          'noreferrer'
        )
      }
      className="flex gap-4 rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logoSpotify} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {!data ? 'Not Playing' : data.title}
        </dd>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {!data ? 'Not Playing' : data.artist}
        </dd>
      </dl>
    </div>
  )
}
