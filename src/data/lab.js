export const labStatusStyles = {
  'In progress':
    'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400',
  Experimenting:
    'bg-sky-100 text-sky-800 dark:bg-sky-500/10 dark:text-sky-400',
  Tinkering:
    'bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400',
  'On the shelf':
    'bg-zinc-100 text-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400',
}

export const labExperiments = [
  {
    name: 'BrainDump',
    status: 'In progress',
    description:
      'A fresh take on note-taking that keeps ideas fast, searchable, and shareable. Building it with Krishna Shamji — he’s crushing the content side while I finish the engineering.',
    link: null,
  },
  {
    name: 'FabInventory',
    status: 'Experimenting',
    description:
      'A local-first, Git-powered inventory and BOM tracker for makers that automatically syncs every change to your GitHub repository.',
    link: 'https://github.com/balub/fabinventory',
  },
  {
    name: 'Open Aquarium Project',
    status: 'Tinkering',
    description:
      'A collection of FOSS tools, configs, hardware, and software I’ve built to help me manage my aquarium. The aquarist side of the site, finally meeting the engineer side.',
    link: 'https://github.com/balub/open-aquarium-project',
  },
  {
    name: 'Lampy',
    status: 'Tinkering',
    description:
      'Custom firmware for my desk lamp, now with a live LED simulator so I can preview animations without flashing the hardware.',
    link: 'https://github.com/balub/lampy',
  },
  {
    name: 'Michi',
    status: 'On the shelf',
    description: 'A simple roadmap maker.',
    link: 'https://github.com/balub/michi',
  },
  {
    name: 'Placeholdr',
    status: 'On the shelf',
    description:
      'A simple, open-source, self-hostable tool for collecting product feedback and analysis.',
    link: 'https://github.com/balub/Placeholdr',
  },
  {
    name: 'OpenWSI',
    status: 'On the shelf',
    description:
      'An open-source medical whole-slide imaging hardware device. I gave a couple of talks about it at FOSS United Bangalore back in 2022.',
    link: 'https://twitter.com/aakansha1216/status/1578708567741280257',
  },
]
