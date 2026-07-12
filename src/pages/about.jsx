import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SEO } from '@/components/SEO'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <SEO
        title="About - Balu Babu"
        description="I’m Balu Babu. I live in Bangalore, India where I build software, hardware, and everything in between."
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey there ! 👋
            </h1>

            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="flex text-sm font-medium text-zinc-800 dark:text-zinc-200 ">
                Here are some rapid fire bullets about me:
              </p>
              <ul className="list-disc ">
                <li>
                  I’m Balu, from India 🇮🇳 and currently live in Bangalore.
                </li>
                <li>
                  I’m working full-time on{' '}
                  <a
                    href="https://usevader.dev"
                    className="font-medium text-teal-500 hover:underline"
                  >
                    Vader
                  </a>
                  , redefining how on-call should feel for engineering teams.
                </li>
                <li>
                  I love working on hardware🔩, software🧑‍💻 and all things
                  engineering🦾.
                </li>
                <li>
                  Self-taught programmer still learning new things everyday.
                </li>
                <li>
                  I&apos;ve been learning Japanese 🇯🇵 for several years and
                  hold an N3 certificate — taking a break from active study for
                  now.
                </li>
                <li>Love anime, big J-Pop fan.</li>
              </ul>
              <p className="flex font-medium text-zinc-800 dark:text-zinc-200 ">
                At the time of writing, I’m particularly interested in
                learning/exploring the following:
              </p>
              <ul className="list-disc ">
                <li>Go</li>
                <li>Kubernetes</li>
                <li>Embedded systems &amp; hardware (STM32, RP2040)</li>
                <li>Physical AI</li>
                <li>Building tooling to make hardware development more accessible</li>
              </ul>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/AskBaluBabu"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>

              <SocialLink
                href="https://github.com/balub"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/balubabu"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>

              <SocialLink
                href="mailto:balub997@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                balub997@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
