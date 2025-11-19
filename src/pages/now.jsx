import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { SimpleLayout } from '@/components/SimpleLayout'
import fs from 'fs'
import path from 'path'

export default function Now({ content }) {
  return (
    <>
      <Head>
        <title>Now - Balu Babu</title>
        <meta
          name="description"
          content="What I'm currently working on, thinking about, and focusing on."
        />
      </Head>
      <SimpleLayout
        title="What I'm doing now"
        intro={`Last updated: ${new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}`}
      >
        <div className="prose-zinc prose dark:prose-invert">
          <div className="mt-8">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h2 className="mb-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                    {children}
                  </h2>
                ),
                ul: ({ children }) => (
                  <ul className="mb-8 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{children}</span>
                  </li>
                ),
                p: ({ children }) => (
                  <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">
                    {children}
                  </p>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 rounded-lg bg-zinc-50 p-6 dark:bg-zinc-800/50">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong>About this page:</strong> This is a "now page" inspired by{' '}
              <a
                href="https://nownownow.com/about"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                the now page movement
              </a>
              . It's a simple way to share what I'm currently focused on without
              the noise of social media.
            </p>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'src', 'content', 'now.md'),
    'utf8'
  )

  return {
    props: {
      content,
    },
  }
}
