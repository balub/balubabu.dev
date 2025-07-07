import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  const response = await getNowPlaying()

  // If something is currently playing, return it
  if (response.status === 200) {
    const song = await response.json()

    if (song.item !== null) {
      const isPlaying = song.is_playing
      const title = song.item.name
      const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
      const album = song.item.album.name
      const albumImageUrl = song.item.album.images[0].url
      const songUrl = song.item.external_urls.spotify

      return new Response(
        JSON.stringify({
          album,
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
            'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
          },
        }
      )
    }
  }

  // If nothing is currently playing, get the last played track
  try {
    const recentlyPlayedResponse = await getRecentlyPlayed()

    if (recentlyPlayedResponse.status === 200) {
      const recentlyPlayed = await recentlyPlayedResponse.json()

      if (recentlyPlayed.items && recentlyPlayed.items.length > 0) {
        const lastTrack = recentlyPlayed.items[0].track
        const title = lastTrack.name
        const artist = lastTrack.artists
          .map((_artist) => _artist.name)
          .join(', ')
        const album = lastTrack.album.name
        const albumImageUrl = lastTrack.album.images[0].url
        const songUrl = lastTrack.external_urls.spotify

        return new Response(
          JSON.stringify({
            album,
            albumImageUrl,
            artist,
            isPlaying: false,
            songUrl,
            title,
            lastPlayed: true,
          }),
          {
            status: 200,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
            },
          }
        )
      }
    }
  } catch (error) {
    console.error('Error fetching recently played tracks:', error)
  }

  // Fallback if everything fails
  return new Response(JSON.stringify({ isPlaying: false }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
