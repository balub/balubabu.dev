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
    title: 'New tool unlocked: Laser cutter',
    caption:
      'I have wanted a laser cutter for years. Now there is one sitting in my room and I can finally start making the things I bought it for.',
    tags: ['Laser cutter', 'Workshop', 'Manufacturing'],
    mediaLayout: 'side-by-side',
    media: [
      {
        type: 'image',
        src: '/images/lab/laser-cutter-2026-06.jpg',
        alt: 'The new laser cutter beside a crowded workbench in the workshop',
      },
      {
        type: 'video',
        src: '/images/lab/laser-arrival-2026-06.mp4',
        poster: '/images/lab/laser-arrival-2026-06-poster.jpg',
        alt: 'A timelapse of the laser cutter arriving and being moved into the workshop',
        layout: 'portrait',
      },
    ],
  },
  {
    date: '2026-06-25',
    title: 'The room starts fighting back',
    caption:
      'By June, finding space for a new tool usually meant moving three other things. I had officially run out of places to put things, but that did not stop me from adding more. There was still enough room to walk between the tools. Mostly.',
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
      'Almost everything happened on this one bench. The rest of the room was mostly storage I had not organized yet.',
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
