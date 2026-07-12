export const GITHUB_USERNAME = 'balub'

export const featuredProjects = [
  {
    name: 'Vader',
    description:
      'Redefining how on-call should feel for engineering teams, starting with a CLI for securely executing diagnostic scripts and generating structured environment reports.',
    links: {
      github: 'https://github.com/UseVader/Vader',
      website: 'https://usevader.dev',
    },
    logo: 'vader',
    repo: 'UseVader/Vader',
  },
  {
    name: 'autofab',
    description:
      'One-click online 3D printing on demand. Started life as Swift Prints, a print-cost estimator, and evolved into a full manufacturing platform.',
    links: {
      github: 'https://github.com/balub/swift-prints',
      website: 'https://autofab.app/',
    },
    logo: 'briefcase',
    repo: 'balub/swift-prints',
  },
  {
    name: 'CoryDora',
    description:
      'An open-source QMK-compatible 3x3 macropad. Designed, 3D printed, and sold independently.',
    links: {
      github: 'https://github.com/balub/CoryDora',
    },
    logo: 'cosmos',
    repo: 'balub/CoryDora',
  },
  {
    name: 'Pigmy-CoryDora',
    description:
      'A compact 3-key macropad built around the Glyph Mini RP2040. Small footprint, big personality.',
    links: {
      github: 'https://github.com/balub/Pigmy-CoryDora',
    },
    logo: 'openShuttle',
    repo: 'balub/Pigmy-CoryDora',
  },
  {
    name: 'patch-panel',
    description:
      'A YAML-driven Chrome extension that gives you a bookmarks-bar-style launcher for all your homelab services from any new tab.',
    links: {
      github: 'https://github.com/balub/patch-panel',
    },
    logo: 'helioStream',
    repo: 'balub/patch-panel',
  },
  {
    name: 'Raikou',
    description:
      'A lightning-fast CLI for managing and reconnecting SSH sessions. Built in Go.',
    links: {
      github: 'https://github.com/balub/Raikou',
    },
    logo: 'openShuttle',
    repo: 'balub/Raikou',
  },
  {
    name: 'Swatch',
    description:
      'A visual archive of 3D-printed filament swatches from brands available in India, helping buyers see how a color really looks in print.',
    links: {
      github: 'https://github.com/balub/swatch',
      website: 'https://swatch.balubabu.dev',
    },
    logo: 'animaginary',
    repo: 'balub/swatch',
  },
  {
    name: 'thinkbeforeyouping.me',
    description:
      'A tiny, universal clarity tool that helps people think before they ping someone for help.',
    links: {
      github: 'https://github.com/balub/thinkbeforeyouping.me',
      website: 'https://thinkbeforeyouping.me',
    },
    logo: 'work',
    repo: 'balub/thinkbeforeyouping.me',
  },
]

export const ignoredGithubRepos = ['balub/balubabu.dev']

export const shownGithubRepos = [
  'balub/lampy',
  'balub/Placeholdr',
  'balub/fabinventory',
  'balub/open-aquarium-project',
  'balub/michi',
]

export const featuredRepoFullNames = featuredProjects.map(
  (project) => project.repo
)
