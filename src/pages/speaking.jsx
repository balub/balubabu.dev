import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Balu Babu</title>
        <meta
          name="description"
          content="I’ve spoken at a few events offline and online on various topics."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at a few events offline and online on various topics."
        intro="I personally really love giving talks at offline events, they are a great way for me to interact with folks who are into the same things I am into and also gives me a reason to work on stuff I may have not done so ordinarily. These are few of the talks I've given over the years and I plan on giving more in the future."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=UiJbgOzwvzU&t=252s"
              title="CoryDora: A Macropad, A Supply Chain, and A Case for Local Manufacturing"
              description="Using the CoryDora macropad as a case study, this presentation argues for strengthening India's local manufacturing ecosystem and supporting makers to reduce dependence on fragile global supply chains"
              event="IndiaFOSS 2025, September 2025"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=pFYOFzUogiU"
              title="Building Open Hardware with FOSS"
              description="talk I gave on the challenges of building hardware projects and how using FOSS can make it easier."
              event="ChennaiFOSS 2.0, April 2024"
              cta="Watch video"
            />


            <Appearance
              href="https://www.youtube.com/watch?v=WPDn9vHdCuU&t=535s"
              title="Backend Hottakes"
              description="Gave a talk where I told folks a few hottakes I have in backend development"
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
              title="Lightning Talk: OpenWSI"
              description="Gave a short lightning talk on my OpenWSI project."
              event="FOSS United Bangalore, November 2022"
              cta="More info"
            />
            <Appearance
              href="https://twitter.com/aakansha1216/status/1578708567741280257?s=20&t=eXr1IxfGLXzh6jgqOr_3ow"
              title="Building an Open Source Medical Whole Slide Imaging Hardware Device"
              description="Gave a talk on building an open-source medical hardware device at FOSS United October 2022 Meetup."
              event="FOSS United Bangalore, October 2022"
              cta="More info"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=_rhDb5x9kQA"
              title="Realtime Apps with Server-Side Events"
              description="A deep-dive into building realtime-apps using server-side events in the React."
              event="ReactJS Bangalore, April 2022"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
