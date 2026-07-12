import { writeFile } from 'fs/promises'

import { getAllArticles } from './getAllArticles'

const STATIC_PATHS = [
  '/',
  '/about',
  '/articles',
  '/projects',
  '/lab',
  '/speaking',
  '/now',
]

export async function generateSitemap() {
  let siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.balubabu.dev'
  ).replace(/\/$/, '')
  let articles = await getAllArticles()

  let entries = [
    ...STATIC_PATHS.map((path) => ({ loc: `${siteUrl}${path}` })),
    ...articles.map((article) => ({
      loc: `${siteUrl}/articles/${article.slug}`,
      lastmod: article.date,
    })),
  ]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) =>
      `  <url>\n    <loc>${entry.loc}</loc>${
        entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''
      }\n  </url>`
  )
  .join('\n')}
</urlset>
`

  await writeFile('./public/sitemap.xml', xml, 'utf8')
}
