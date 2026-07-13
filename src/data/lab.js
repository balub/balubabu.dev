export function sortNewestFirst(items) {
  return [...items].sort(
    (left, right) =>
      new Date(right.date).getTime() - new Date(left.date).getTime()
  )
}

export function sortOldestFirst(items) {
  return [...items].sort(
    (left, right) =>
      new Date(left.date).getTime() - new Date(right.date).getTime()
  )
}

export const labEntries = [
  {
    date: '2026-06-25',
    title: 'The room starts fighting back',
    caption:
      'Every new tool promised to save space and somehow needed a table, three cables, and a box of its own. There was still a patch of floor, so I counted that as progress.',
    tags: ['Workshop', 'Manufacturing'],
    media: [
      {
        type: 'image',
        src: '/images/lab/room-2026-06.jpg',
        alt: 'A wide view of the workshop in June 2026 with tools, storage, boxes, and cables filling the room',
      },
    ],
  },
  {
    date: '2026-04-27',
    title: 'Assembly takes over the bench',
    caption:
      'The build had reached the stage where sitting down meant moving three other things first. I kept one clear square in the middle and called it a system.',
    tags: ['Assembly', 'Workshop'],
    media: [
      {
        type: 'video',
        src: '/images/lab/assembly-2026-04.mp4',
        poster: '/images/lab/assembly-2026-04-poster.jpg',
        alt: 'Assembling parts inside a laser-cut wooden enclosure at the electronics bench',
      },
    ],
  },
  {
    date: '2025-10-12',
    title: 'Electronics bench',
    caption:
      'For one afternoon the centre of the bench was completely empty. I took a photo because I knew nobody would believe me later.',
    tags: ['Electronics', 'Workbench'],
    media: [
      {
        type: 'image',
        src: '/images/lab/electronics-bench-2025-10.jpg',
        alt: 'A cleared electronics bench beneath component drawers and a wall of hand tools',
      },
    ],
  },
  {
    date: '2025-09-22',
    title: 'A room with potential',
    caption:
      'At this point the workshop was one bench, one shelf, and a permanent argument with cardboard boxes. Almost everything I made still began here.',
    tags: ['The beginning', 'Workshop'],
    media: [
      {
        type: 'image',
        src: '/images/lab/room-2025-09.jpg',
        alt: 'The early workshop crowded with a workbench, storage drawers, tools, boxes, and a single chair',
      },
    ],
  },
  {
    date: '2025-02-01',
    title: 'A print taller than the printer',
    caption:
      'The sensible approach was to split it into smaller parts. Naturally, I wanted to see how tall I could make it first.',
    tags: ['3D printing', 'Experiments'],
    media: [
      {
        type: 'video',
        src: '/images/lab/tall-print-2025-02.mp4',
        poster: '/images/lab/tall-print-2025-02-poster.jpg',
        alt: 'A tall 3D-printed Saturn V rocket standing on the workshop bench',
        layout: 'portrait',
      },
    ],
  },
]

export const workbenchArchive = [
  {
    date: '2026-06-01',
    media: {
      type: 'image',
      src: '/images/lab/production-room-2026-06.jpg',
      alt: 'The June 2026 workspace with printers, storage, cables, books, and open boxes',
    },
  },
  {
    date: '2025-10-01',
    media: {
      type: 'image',
      src: '/images/lab/electronics-bench-2025-10.jpg',
      alt: 'The electronics bench in October 2025, briefly cleared in the middle',
    },
  },
  {
    date: '2025-09-01',
    media: {
      type: 'image',
      src: '/images/lab/room-2025-09.jpg',
      alt: 'The workshop in September 2025 with boxes and projects covering most surfaces',
    },
  },
]

export const labMilestones = []
