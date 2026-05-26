import {
  GITHUB_USERNAME,
  featuredRepoFullNames,
  ignoredGithubRepos,
  shownGithubRepos,
} from '@/data/projects'

const languageLogoKeys = {
  Arduino: 'openShuttle',
  Dart: 'animaginary',
  Go: 'openShuttle',
  HTML: 'work',
  Java: 'briefcase',
  JavaScript: 'planetaria',
  Python: 'cosmos',
  TypeScript: 'helioStream',
}

const fallbackLogoKeys = [
  'animaginary',
  'briefcase',
  'cosmos',
  'helioStream',
  'openShuttle',
  'planetaria',
  'work',
]

function normalizeRepoName(repoName) {
  return repoName.toLowerCase()
}

function normalizeHomepage(homepage) {
  if (!homepage) {
    return null
  }

  const trimmedHomepage = homepage.trim()

  if (!trimmedHomepage) {
    return null
  }

  if (/^https?:\/\//.test(trimmedHomepage)) {
    return trimmedHomepage
  }

  return `https://${trimmedHomepage}`
}

function hashString(value) {
  return value.split('').reduce((hash, character) => {
    return (hash + character.charCodeAt(0)) % fallbackLogoKeys.length
  }, 0)
}

function getLogoKey(repo) {
  if (repo.language && languageLogoKeys[repo.language]) {
    return languageLogoKeys[repo.language]
  }

  return fallbackLogoKeys[hashString(repo.name)]
}

function shouldShowRepo(repo, featuredRepos, ignoredRepos, shownRepos) {
  if (!repo || repo.fork || repo.archived) {
    return false
  }

  const repoName = normalizeRepoName(repo.full_name)

  if (shownRepos.size > 0 && !shownRepos.has(repoName)) {
    return false
  }

  if (featuredRepos.has(repoName) || ignoredRepos.has(repoName)) {
    return false
  }

  return Boolean(repo.description && repo.description.trim())
}

function getGitHubHeaders() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'balubabu.dev',
    'X-GitHub-Api-Version': '2022-11-28',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

async function fetchOwnedRepos(username) {
  const repos = []
  let page = 1

  while (page <= 5) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=owner&sort=updated&direction=desc&per_page=100&page=${page}`,
      {
        headers: getGitHubHeaders(),
      }
    )

    if (!response.ok) {
      throw new Error(
        `GitHub repository fetch failed with status ${response.status}`
      )
    }

    const pageRepos = await response.json()
    repos.push(...pageRepos)

    if (pageRepos.length < 100) {
      break
    }

    page += 1
  }

  return repos
}

export async function getGitHubProjects() {
  const featuredRepos = new Set(
    featuredRepoFullNames.map((repo) => normalizeRepoName(repo))
  )
  const ignoredRepos = new Set(
    ignoredGithubRepos.map((repo) => normalizeRepoName(repo))
  )
  const shownRepos = new Set(
    shownGithubRepos.map((repo) => normalizeRepoName(repo))
  )
  const repos = await fetchOwnedRepos(GITHUB_USERNAME)

  return repos
    .filter((repo) =>
      shouldShowRepo(repo, featuredRepos, ignoredRepos, shownRepos)
    )
    .sort((firstRepo, secondRepo) => {
      return new Date(secondRepo.pushed_at) - new Date(firstRepo.pushed_at)
    })
    .map((repo) => ({
      name: repo.name,
      description: repo.description.trim(),
      links: {
        github: repo.html_url,
        website: normalizeHomepage(repo.homepage),
      },
      logo: getLogoKey(repo),
      language: repo.language,
      pushedAt: repo.pushed_at,
      repo: repo.full_name,
      source: 'github',
    }))
}
