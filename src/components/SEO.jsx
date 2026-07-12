import Head from 'next/head'
import { useRouter } from 'next/router'

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.balubabu.dev'
).replace(/\/$/, '')

const SITE_NAME = 'Balu Babu'
const DEFAULT_IMAGE = `${SITE_URL}/images/og.jpg`

export function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
}) {
  const router = useRouter()
  const canonical = `${SITE_URL}${router.asPath.split('?')[0].split('#')[0]}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AskBaluBabu" />
      <meta name="twitter:creator" content="@AskBaluBabu" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </Head>
  )
}
