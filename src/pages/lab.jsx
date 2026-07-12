import { SEO } from '@/components/SEO'
import { SimpleLayout } from '@/components/SimpleLayout'
import { labExperiments, labStatusStyles } from '@/data/lab'

function StatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        labStatusStyles[status] ?? labStatusStyles['On the shelf']
      }`}
    >
      {status}
    </span>
  )
}

function Experiment({ experiment }) {
  const body = (
    <>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {experiment.name}
        </h2>
        <StatusBadge status={experiment.status} />
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {experiment.description}
      </p>
    </>
  )

  const className =
    'flex flex-col rounded-2xl border border-zinc-100 p-6 transition dark:border-zinc-700/40'

  if (experiment.link) {
    return (
      <a
        href={experiment.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:border-teal-500/40 hover:bg-zinc-50 dark:hover:border-teal-500/40 dark:hover:bg-zinc-800/50`}
      >
        {body}
      </a>
    )
  }

  return <div className={className}>{body}</div>
}

export default function Lab() {
  return (
    <>
      <SEO
        title="Lab - Balu Babu"
        description="Unfinished experiments, half-built hardware, and things I'm still figuring out. The projects page has things I've made; this page has things in flight."
      />
      <SimpleLayout
        title="The lab: things I’m still figuring out."
        intro="My projects page has things I’ve made. This page has the experiments — unfinished, half-built, occasionally on fire. Everything here is in some state of flux, and that’s the point."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {labExperiments.map((experiment) => (
            <Experiment key={experiment.name} experiment={experiment} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
