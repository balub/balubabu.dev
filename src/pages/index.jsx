import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SEO } from '@/components/SEO'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { generateSitemap } from '@/lib/generateSitemap'
import { getAllArticles } from '@/lib/getAllArticles'
import { resume } from '@/utils/resume'
import { building, statusStyles } from '@/data/building'
import { BriefcaseIcon } from '@/components/BriefcaseIcon'
import { Spotify } from '@/components/Spotify'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeroLink({ href, children }) {
  return (
    <a
      className="font-medium text-teal-500 hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function StatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        statusStyles[status] ?? statusStyles.Paused
      }`}
    >
      {status}
    </span>
  )
}

function HammerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11.5 7.5 4.75 14.25a1.77 1.77 0 0 0 0 2.5l2.5 2.5a1.77 1.77 0 0 0 2.5 0l6.75-6.75"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M10 6 14.5 2.75c2.5-.5 6.75 1.5 6.75 4.75-.75-.75-2.25-.9-3 0L17.5 9.25a1.68 1.68 0 0 1-2.4 0L10 6Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ProjectName({ project, className }) {
  if (!project.href) {
    return <span className={className}>{project.name}</span>
  }
  const linkClassName = `${className} transition hover:text-teal-500 dark:hover:text-teal-400`
  if (project.href.startsWith('/')) {
    return (
      <Link href={project.href} className={linkClassName}>
        {project.name}
      </Link>
    )
  }
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {project.name}
    </a>
  )
}

function NowBuilding() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Link
          href="/projects"
          className="group flex items-center transition hover:text-teal-500 dark:hover:text-teal-400"
        >
          <HammerIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">What I’m building now</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-auto h-4 w-4 stroke-zinc-400 transition group-hover:translate-x-0.5 group-hover:stroke-teal-500 dark:group-hover:stroke-teal-400"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </h2>
      <ol className="mt-6 space-y-6">
        {building.map((project) => (
          <li key={project.name}>
            <div className="flex items-center justify-between gap-4">
              <ProjectName
                project={project}
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
              />
              <StatusBadge status={project.status} />
            </div>
            <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              {project.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1Lp0e_0z1XqfQz_WKv9ijAiNz7f78f2sQ/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function GetInTouch() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Say hi
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I enjoy talking to people building unusual software, hardware, and
        manufacturing systems. Reach out if you want to collaborate, invite me
        to speak, or exchange overly ambitious project ideas.
      </p>
      <Button
        href="mailto:balub997@gmail.com"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Email me
      </Button>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <SEO
        title="Balu Babu - Maker, Engineer, Anime Nerd and Aquarist."
        description="Hey there, I'm Balu. I'm on a mission to make manufacturing as accessible as software — building Vader, autofab, and open hardware from Bangalore, India."
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I build hardware, software, and the systems required to manufacture
            both.
          </h1>
          <p className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
            On a mission to make manufacturing{' '}
            <span className="text-teal-500">as accessible as software</span>.
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Hey there, I&apos;m Balu! I love building things. These days,
            I&apos;m focused on building my own company and bringing new open
            hardware products to life. I&apos;m passionate about engineering and
            anime, and I&apos;m always happy to chat about both (and more).
            Previously, I built intelligent CAD software for mechanical
            engineers at{' '}
            <HeroLink href="https://www.hanomi.ai/">Hanomi</HeroLink>, where we
            reimagined design automation with AI. I also helped build the
            open-source API development ecosystem at{' '}
            <HeroLink href="https://hoppscotch.io/">Hoppscotch</HeroLink>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/AskBaluBabu"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/balub"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/balubabu"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-20">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <section aria-labelledby="writing-title">
              <h2
                id="writing-title"
                className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
              >
                Recent writing
              </h2>
              <div className="mt-10 flex flex-col gap-16">
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <NowBuilding />
            <Resume />
            <GetInTouch />
            <Spotify />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
    await generateSitemap()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
