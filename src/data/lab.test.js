import assert from 'node:assert/strict'
import test from 'node:test'

import {
  labEntries,
  sortNewestFirst,
  sortOldestFirst,
  workbenchArchive,
} from './lab.js'

const records = [
  { title: 'Middle', date: '2026-06-15' },
  { title: 'Oldest', date: '2024-01-01' },
  { title: 'Newest', date: '2026-07-12' },
]

test('sortNewestFirst returns dated records from newest to oldest', () => {
  assert.deepEqual(
    sortNewestFirst(records).map((record) => record.title),
    ['Newest', 'Middle', 'Oldest']
  )
})

test('sortOldestFirst returns dated records from oldest to newest', () => {
  assert.deepEqual(
    sortOldestFirst(records).map((record) => record.title),
    ['Oldest', 'Middle', 'Newest']
  )
})

test('date ordering does not mutate the source content', () => {
  sortNewestFirst(records)
  sortOldestFirst(records)

  assert.deepEqual(
    records.map((record) => record.title),
    ['Middle', 'Oldest', 'Newest']
  )
})

test('published lab media uses real local image or video sources', () => {
  const journalMedia = labEntries.flatMap((entry) => entry.media)
  const archiveMedia = workbenchArchive.map((entry) => entry.media)

  for (const media of [...journalMedia, ...archiveMedia]) {
    assert.match(media.src, /^\/images\/lab\//)
    assert.ok(['image', 'video'].includes(media.type))
    assert.ok(media.alt.length > 0)
  }
})
