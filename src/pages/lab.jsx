import Image from 'next/image'

import { Container } from '@/components/Container'
import { SEO } from '@/components/SEO'
import {
  labEntries,
  labMilestones,
  sortNewestFirst,
  sortOldestFirst,
  workbenchArchive,
} from '@/data/lab'

const monthFormatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const yearFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  timeZone: 'UTC',
})

function formatDate(date, formatter = monthFormatter) {
  return formatter.format(new Date(`${date}T00:00:00Z`))
}

function Media({ media, priority = false, compact = false }) {
  const frameClassName = compact
    ? 'aspect-[4/3]'
    : 'aspect-[3/2] sm:aspect-[16/9]'

  if (media.type === 'video') {
    return (
      <div className={media.layout === 'portrait' ? 'max-w-lg' : undefined}>
        <video
          controls
          playsInline
          preload="metadata"
          poster={media.poster}
          aria-label={media.alt}
          className={`w-full rounded-2xl bg-zinc-100 object-cover ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10 sm:rounded-3xl ${
            media.layout === 'portrait' ? 'aspect-[9/16]' : frameClassName
          }`}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <div
      className={`relative ${frameClassName} overflow-hidden rounded-2xl sm:rounded-3xl`}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes={
          compact
            ? '(min-width: 1024px) 20rem, 78vw'
            : '(min-width: 1024px) 64rem, 100vw'
        }
        className="object-cover"
      />
    </div>
  )
}

function JournalEntry({ entry, priority }) {
  return (
    <article className="border-t border-zinc-100 pt-10 dark:border-zinc-700/40 sm:pt-14">
      <header className="mb-6 max-w-2xl sm:mb-8">
        <time
          dateTime={entry.date}
          className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500"
        >
          {formatDate(entry.date)}
        </time>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {entry.title}
        </h2>
      </header>

      <div className="space-y-5">
        {entry.media.map((media, index) => (
          <Media
            key={media.src}
            media={media}
            priority={priority && index === 0}
          />
        ))}
      </div>

      <div className="mt-6 max-w-2xl sm:mt-8">
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
          {entry.caption}
        </p>
        {entry.tags?.length > 0 && (
          <ul
            className="mt-5 flex flex-wrap gap-x-4 gap-y-1"
            aria-label="Entry tags"
          >
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs text-zinc-400 dark:text-zinc-500"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

function WorkbenchArchive() {
  const photographs = sortNewestFirst(workbenchArchive)

  return (
    <section aria-labelledby="workbench-heading" className="mt-28 sm:mt-36">
      <div className="max-w-2xl">
        <h2
          id="workbench-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
        >
          Workbench Archive
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          One photo every month. No cleaning, no staging, no filters. Just
          whatever was left on the bench.
        </p>
      </div>

      <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
        {photographs.map((photograph) => (
          <figure
            key={photograph.date}
            className="w-[78vw] shrink-0 snap-start sm:w-[22rem] lg:w-auto"
          >
            <Media media={photograph.media} compact />
            <figcaption className="mt-3">
              <time
                dateTime={photograph.date}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                {formatDate(photograph.date)}
              </time>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function MilestoneTimeline() {
  const milestones = sortOldestFirst(labMilestones)

  if (milestones.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="milestones-heading" className="mt-28 sm:mt-36">
      <div className="max-w-2xl">
        <h2
          id="milestones-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
        >
          Milestones
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The tools, firsts, and small thresholds that changed what could happen
          in this room.
        </p>
      </div>

      <ol className="relative mt-10 max-w-3xl border-l border-zinc-200 dark:border-zinc-700">
        {milestones.map((milestone) => (
          <li
            key={`${milestone.date}-${milestone.title}`}
            className="relative pb-10 pl-8 last:pb-0 sm:grid sm:grid-cols-[5rem_1fr] sm:gap-8 sm:pl-10"
          >
            <span className="absolute -left-[0.3125rem] top-2 h-2.5 w-2.5 rounded-full bg-teal-500 ring-4 ring-white dark:bg-teal-400 dark:ring-zinc-900" />
            <time
              dateTime={milestone.date}
              className="font-mono text-xs leading-7 text-zinc-400 dark:text-zinc-500"
            >
              {formatDate(milestone.date, yearFormatter)}
            </time>
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {milestone.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                {milestone.memory}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function Lab() {
  const entries = sortNewestFirst(labEntries)

  return (
    <>
      <SEO
        title="The Lab - Balu Babu"
        description="A living journal of the workshop where almost everything I build begins."
      />
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            The Lab
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
            <p>This is where almost everything I build starts.</p>
            <p>
              From PCB prototypes and laser-cut acrylic to software, robots, and
              manufacturing experiments.
            </p>
            <p>
              I’m documenting how this space evolves over time—from a spare room
              in my house to wherever this journey ends.
            </p>
          </div>
        </header>

        <section
          aria-label="Workshop journal"
          className="mt-16 space-y-20 sm:mt-24 sm:space-y-28"
        >
          {entries.map((entry, index) => (
            <JournalEntry
              key={`${entry.date}-${entry.title}`}
              entry={entry}
              priority={index === 0}
            />
          ))}
        </section>

        <WorkbenchArchive />
        <MilestoneTimeline />

        <footer className="mt-28 border-t border-zinc-100 pt-10 dark:border-zinc-700/40 sm:mt-36">
          <p className="max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            This page will never be finished. That is the point.
          </p>
        </footer>
      </Container>
    </>
  )
}
