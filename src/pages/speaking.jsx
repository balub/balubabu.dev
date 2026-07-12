import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { SEO } from '@/components/SEO'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9.5 8 6 4-6 4V8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TalkMedia({ image, title }) {
  const mediaClasses =
    'relative z-10 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800'

  if (image) {
    return (
      <div className={mediaClasses}>
        {/* YouTube thumbnails are displayed directly to avoid bundling remote media. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} talk thumbnail`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  return (
    <div className={mediaClasses} aria-hidden="true">
      <div className="flex h-full flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white/70 dark:border-zinc-600 dark:bg-zinc-900/40">
          <PlayIcon className="h-6 w-6" />
        </span>
        <span className="mt-3 text-sm font-medium">Talk recording</span>
      </div>
    </div>
  )
}

function Appearance({ title, description, event, cta, href, image }) {
  return (
    <Card as="article">
      <TalkMedia image={image} title={title} />
      <div className="mt-6 flex flex-col items-start">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Eyebrow decorate>{event}</Card.Eyebrow>
        <Card.Description>{description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </div>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <SEO
        title="Speaking - Balu Babu"
        description="Talks I’ve given at conferences and meetups on open hardware, local manufacturing, backend engineering, and more."
      />
      <SimpleLayout
        title="I’ve spoken at a few events offline and online on various topics."
        intro="I personally really love giving talks at offline events, they are a great way for me to interact with folks who are into the same things I am into and also gives me a reason to work on stuff I may have not done so ordinarily. These are few of the talks I've given over the years and I plan on giving more in the future."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=UiJbgOzwvzU&t=252s"
              image="https://i.ytimg.com/vi/UiJbgOzwvzU/maxresdefault.jpg"
              title="CoryDora: A Macropad, A Supply Chain, and A Case for Local Manufacturing"
              description="Using the CoryDora macropad as a case study, this presentation argues for strengthening India's local manufacturing ecosystem and supporting makers to reduce dependence on fragile global supply chains"
              event="IndiaFOSS 2025, September 2025"
              cta="Watch video"
            />
            <Appearance
              href="https://fossunited.org/events/blr-june"
              image="/images/speaking/unmanned-underwater-vehicle-june-2024.png"
              title="Let’s Build an Unmanned Underwater Vehicle"
              description="A hands-on look at designing and building an unmanned underwater vehicle as an open hardware project."
              event="FOSS United Bangalore, June 2024"
              cta="More info"
            />
            <Appearance
              href="https://x.com/FOSSUnitedBLR/status/1794254992003747966?s=20"
              image="/images/speaking/hobbyists-guide-building-hardware-may-2024.png"
              title="A Hobbyist’s Guide to Building Hardware"
              description="A practical guide to getting started with hobby hardware projects and turning ideas into working builds."
              event="FOSS United Bangalore, May 2024"
              cta="More info"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=pFYOFzUogiU"
              image="https://i.ytimg.com/vi/pFYOFzUogiU/maxresdefault.jpg"
              title="Building Open Hardware with FOSS"
              description="A talk on the challenges of building hardware projects and how FOSS tooling can make the journey easier."
              event="ChennaiFOSS 2.0, April 2024"
              cta="Watch video"
            />

            <Appearance
              href="https://www.youtube.com/watch?v=WPDn9vHdCuU&t=535s"
              image="/images/speaking/backend-hottakes-september-2023.png"
              title="Backend Hottakes"
              description="A collection of my hot takes on backend development, delivered live to a room that didn’t always agree."
              event="FOSS United Bangalore, September 2023"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=13ZJTe4mvNY"
              title="Going down the rabbit hole of mechanical keyboards"
              description="A deep-dive into the world of mechanical keyboards."
              event="FOSS United Bangalore, March 2023"
              cta="Watch video"
            />
            <Appearance
              href="https://twitter.com/FOSSUnitedBLR/status/1591400843005218817?s=20"
              image="/images/speaking/openwsi-lightning-talk-november-2022.png"
              title="Lightning Talk: OpenWSI"
              description="Gave a short lightning talk on my OpenWSI project."
              event="FOSS United Bangalore, November 2022"
              cta="More info"
            />
            <Appearance
              href="https://twitter.com/aakansha1216/status/1578708567741280257?s=20&t=eXr1IxfGLXzh6jgqOr_3ow"
              image="/images/speaking/openwsi-foss-united-october-2022.png"
              title="Building an Open Source Medical Whole Slide Imaging Hardware Device"
              description="Gave a talk on building an open-source medical hardware device at FOSS United October 2022 Meetup."
              event="FOSS United Bangalore, October 2022"
              cta="More info"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=_rhDb5x9kQA"
              image="https://i.ytimg.com/vi/_rhDb5x9kQA/hqdefault.jpg"
              title="Realtime Apps with Server-Side Events"
              description="A deep dive into building realtime apps with server-sent events in React."
              event="ReactJS Bangalore, April 2022"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
        <div className="mt-24 rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Want me to speak at your event?
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            I’m always up for giving talks, especially at offline events. Topics
            I love speaking about: building open hardware in India, local
            manufacturing for makers, turning prototypes into products,
            open-source communities, backend engineering and developer tooling,
            and mechanical keyboards.
          </p>
          <Button
            href="mailto:balub997@gmail.com?subject=Speaking%20invitation"
            variant="secondary"
            className="mt-6"
          >
            Invite me to speak
          </Button>
        </div>
      </SimpleLayout>
    </>
  )
}
