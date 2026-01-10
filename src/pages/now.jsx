import React from 'react'
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
        intro={`Last updated: January 10, 2026`}
      >
        <div className="prose-zinc prose dark:prose-invert">
          <div className="mt-8">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h2 className="mb-6 mt-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h3 className="mb-4 mt-12 border-l-4 border-teal-500 pl-4 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    {children}
                  </h3>
                ),
                ul: ({ children }) => (
                  <ul className="mb-8 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {children}
                  </ul>
                ),
                li: ({ children }) => {
                  const items = React.Children.toArray(children)
                  const onboardingIndex = items.findIndex(
                    (child) =>
                      React.isValidElement(child) &&
                      child.props?.['data-onboarding-image']
                  )

                  if (onboardingIndex !== -1) {
                    const onboardingFigure = items[onboardingIndex]
                    const textNodes = items.filter(
                      (_, index) => index !== onboardingIndex
                    )

                    return (
                      <li className="flex items-start">
                        <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
                        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                          <div className="flex-1">{textNodes}</div>
                          <div className="flex shrink-0 justify-center sm:justify-end">
                            {onboardingFigure}
                          </div>
                        </div>
                      </li>
                    )
                  }

                  return (
                    <li className="flex items-start">
                      <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
                      <span className="flex-1">{children}</span>
                    </li>
                  )
                },
                p: ({ children, node }) => {
                  // Check if paragraph only contains an image
                  const hasOnlyImage =
                    node?.children?.length === 1 &&
                    node?.children[0]?.tagName === 'img'

                  // If it only contains an image, render without p wrapper
                  if (hasOnlyImage) {
                    return <>{children}</>
                  }

                  return (
                    <p className="mb-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                      {children}
                    </p>
                  )
                },
                img: ({ alt, src, ...props }) => {
                  // Special handling for the "Year of Realizations" image
                  const isHeroImage = src?.includes('2025-realizations')
                  const isOnboardingImage = src?.includes('vader-onboarding')

                  if (isHeroImage) {
                    return (
                      <figure className="group relative my-12 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <img
                          alt={alt}
                          src={src}
                          className="max-h-[70vh] w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          {...props}
                        />
                        {alt && (
                          <figcaption className="absolute bottom-0 left-0 right-0 z-20 p-6 text-lg font-medium text-white drop-shadow-lg">
                            {alt}
                          </figcaption>
                        )}
                      </figure>
                    )
                  }

                  const figureClassName = isOnboardingImage
                    ? 'not-prose my-4 w-full max-w-sm overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800 sm:my-0 sm:w-[30%] sm:max-w-none'
                    : 'not-prose my-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800'

                  return (
                    <figure
                      className={figureClassName}
                      data-onboarding-image={isOnboardingImage || undefined}
                    >
                      <img alt={alt} src={src} className="w-full" {...props} />
                      {alt && (
                        <figcaption className="border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
                          {alt}
                        </figcaption>
                      )}
                    </figure>
                  )
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 rounded-2xl border border-zinc-200/50 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 shadow-sm dark:border-zinc-700/50 dark:from-zinc-800/50 dark:to-zinc-900/50">
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-900 dark:text-zinc-100">
                About this page:
              </strong>{' '}
              This is a "now page" inspired by{' '}
              <a
                href="https://nownownow.com/about"
                className="font-medium text-teal-600 underline decoration-teal-500/30 transition-colors hover:text-teal-700 hover:decoration-teal-500/60 dark:text-teal-400 dark:hover:text-teal-300"
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
