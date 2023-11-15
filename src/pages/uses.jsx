import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Balu Babu</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M2 Pro, 16GB RAM (2023)">
              I don't like Apple, but I started using this device because
              Windows has terrible Docker volumes support, and I did not enjoy
              working with WSL. Despite its drawbacks, I’ve come to appreciate
              this machine for its small form factor and its battery life, which
              gives me the freedom to move around without worrying about the
              charger.
            </Tool>
            <Tool title="ASUS ROG Strix">
              I primarily use this machine for personal projects and gaming; it
              has a 3050, which is more than sufficient to run all the games I
              want to play. I love this machine, but I wish it had a better
              battery and a solution to the constant Bluetooth driver issues,
              although I think that's a Windows problem.
            </Tool>
            <Tool title="27’’ LG and 22’’ Dell IPS FHD displays">
              I can't work without a second monitor, and after trying multiple
              setups over the years, I've settled on one I like with two
              monitors. Both of my monitors have IPS panels, which are a must
              for any monitors I own. I'm fine with 1080p for both work and
              gaming, but I might get a 4K, 144Hz gaming display sometime in the
              future.
            </Tool>
            <Tool title="Keychron K4 Wireless Mechanical Keyboard (Version 2)">
              I use a 100% layout Keychron K4 with Gateron Brown switches as my
              daily driver. This is my first mechanical keyboard, and I wish it
              had QMK support.
            </Tool>
            <Tool title="Corne Keyboard">
              I'm currently experimenting with split keyboards using the Corne
              keyboard, which I built from scratch. It's fun to use it daily.
            </Tool>
            <Tool title="Logitech MX MASTER 3S">
              I got this mouse to alleviate wrist pain I was experiencing, and
              while I'm not sure if it made a significant difference, my wrist
              pains have improved after using this mouse. It has a fantastic
              battery life; I only have to charge it every 2-3 months.
            </Tool>
            <Tool title="Sony WH-1000XM4 Wireless Noise Cancelling Headphones">
              These headphones are amazing, with excellent noise cancellation
              and music quality. They also have a great battery life. I use them
              every day and love the ability to pair them with two devices and
              seamlessly switch between them.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I’ve been using VS Code for a long time now. I appreciate its
              simplicity and vast extension ecosystem. It's not perfect, but
              after trying out tools like IntelliJ, Sublime Text, Atom, and many
              more, I prefer VS Code.
            </Tool>
            <Tool title="VIM">
              After hearing about how awesome it is from{' '}
              <a href="https://www.youtube.com/c/theprimeagen">ThePrimeagen</a>,
              I decided to give it a try. After watching a few videos, I can’t
              believe I didn’t try it much earlier. I love the idea of a{' '}
              <em>Personalized Development Environment</em> where users build
              their dev environment. I plan to switch fully to Vim eventually,
              but for now, I'm using Vim motions in VS Code while setting it up.
            </Tool>
            <Tool title="Warp">
              I’ve been using Warp as my terminal for over a year now, and I
              love it. I wish I didn’t have to log in to start using it, but
              aside from that, I have no complaints.
            </Tool>
            <Tool title="Windows Terminal">
              I’ve been using Windows Terminal for a long time, from its initial
              announcement to today. While I primarily code on my Mac these
              days, I still find myself using it on my Windows machine for
              day-to-day tasks and occasional dev work.
            </Tool>
            <Tool title="Raycast">
              This is probably my most-used application on my Mac. I use it more
              times than I can count every day. I love this tool and its
              plugins; I even wrote a few custom plugins for it.
            </Tool>
            <Tool title="Beekeeper Studio">
              After VS Code (and Docker), Beekeeper Studio is the tool I use the
              most. I love its design and how it does one thing and does it
              really well. I've tried alternatives like pgAdmin, DBeaver, and
              DataGrip, but I’ve never liked their designs and the amount of
              work I have to do just to open a table and see its contents.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Miscellaneous">
            <Tool title="Autodesk Fusion 360">
              This is my go-to software for CAD work. It's relatively simple but
              incredibly powerful.
            </Tool>
            <Tool title="KiCad">
              I use KiCad to design PCBs. I love the fact that it is
              open-source, which is a refreshing change in a domain dominated by
              closed, paid software that forces users into their ecosystem,
              making it hard for them to leave.
            </Tool>
            <Tool title="Ultimaker Cura, Prusa Slicer, AnyCubic Slicer">
              A slicer is a software used to generate GCODE, which are
              instructions a 3D printer can understand. I have two 3D printers,
              an{' '}
              <a href="https://www.creality.com/products/ender-3-pro-3d-printer?spm=..page_1967279.products_display_1.1&spm_prev=..product_b54589d3-4875-44b5-aeb8-8e4c41b9237f.header_1.1">
                Ender-3 Pro
              </a>{' '}
              and an{' '}
              <a href="https://www.anycubic.com/products/kobra-2-neo">
                AnyCubic Kobra Neo 2
              </a>
              .
            </Tool>
            <Tool title="Tailscale">
              Tailscale is a VPN that uses the Wireguard protocol. Since my ISP
              cannot provide me with a static IP to access my homelab, I use
              Tailscale to connect to my homelab on external networks.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
