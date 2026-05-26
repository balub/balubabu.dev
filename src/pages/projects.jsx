import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { featuredProjects } from '@/data/projects'
import { getGitHubProjects } from '@/lib/githubProjects'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoVader from '@/images/logos/vader.png'
import logoBriefcase from '@/images/logos/briefcase.svg'
import logoWork from '@/images/logos/work.svg'

const logos = {
  animaginary: logoAnimaginary,
  briefcase: logoBriefcase,
  cosmos: logoCosmos,
  helioStream: logoHelioStream,
  openShuttle: logoOpenShuttle,
  planetaria: logoPlanetaria,
  vader: logoVader,
  work: logoWork,
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ProjectCard({ project }) {
  const logo = logos[project.logo] || logoWork

  return (
    <Card as="li" className="flex flex-col">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={project.links.github || project.links.website}>
          {project.name}
        </Card.Link>
      </h2>
      <Card.Description>{project.description}</Card.Description>
      <div className="relative z-10 mt-auto flex items-center gap-4 pt-6">
        {project.links.github && (
          <a
            href={project.links.github}
            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-5 w-5 flex-none transition group-hover:text-teal-500" />
            <span className="text-xs">Code</span>
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon className="h-5 w-5 flex-none transition group-hover:text-teal-500" />
            <span className="text-xs">Visit</span>
          </a>
        )}
      </div>
    </Card>
  )
}

function ProjectGrid({ projects }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project.repo || project.name} />
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  let githubProjects = []

  try {
    githubProjects = await getGitHubProjects()
  } catch (error) {
    console.warn(error)
  }

  return {
    props: {
      githubProjects,
    },
    revalidate: 60 * 60 * 24,
  }
}

export default function Projects({ githubProjects }) {
  return (
    <>
      <Head>
        <title>Projects - Balu Babu</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years. These are the ones I keep closest at hand, followed by a living archive of public repositories from GitHub."
      >
        <ProjectGrid projects={featuredProjects} />

        {githubProjects.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              More from GitHub
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              A running archive of public projects with enough context to be
              useful outside the repo.
            </p>
            <div className="mt-10">
              <ProjectGrid projects={githubProjects} />
            </div>
          </section>
        )}
      </SimpleLayout>
    </>
  )
}
