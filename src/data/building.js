export const building = [
  {
    name: 'Vader',
    status: 'Building',
    description:
      'Redefining how on-call should feel for engineering teams. My main focus right now.',
    href: 'https://usevader.dev',
    cta: 'usevader.dev',
  },
  {
    name: 'autofab',
    status: 'Beta',
    description:
      'One-click online 3D printing on demand, built alongside local maker collaborators.',
    href: 'https://autofab.app',
    cta: 'autofab.app',
  },
  {
    name: 'CoryDora',
    status: 'Shipped',
    description:
      'An open-source QMK-compatible macropad — designed, manufactured, and sold independently from India.',
    href: 'https://github.com/balub/CoryDora',
    cta: 'View on GitHub',
  },
  {
    name: 'BrainDump',
    status: 'Building',
    description:
      'A fresh take on note-taking that keeps ideas fast, searchable, and shareable. With Krishna Shamji.',
    href: '/lab',
    cta: 'In the lab',
  },
]

export const statusStyles = {
  Building: 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400',
  Beta: 'bg-sky-100 text-sky-800 dark:bg-sky-500/10 dark:text-sky-400',
  Shipped: 'bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400',
  Paused: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400',
}
