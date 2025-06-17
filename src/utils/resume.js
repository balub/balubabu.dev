import logoHoppscotch from '@/images/logos/hoppscotch.svg'
import logoHanomi from '@/images/logos/hanomi.svg'
import logoWork from '@/images/logos/work.svg'
import logoBriefcase from '@/images/logos/briefcase.svg'

export const resume = [
  {
    company: 'Hanomi',
    title: 'Full Stack Engineering Contractor',
    logo: logoHanomi,
    start: '2024',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },

  {
    company: 'Hoppscotch',
    title: 'Product Engineer (Backend)',
    logo: logoHoppscotch,
    start: '2022',
    end: '2024',
  },
  {
    company: 'Osure Care Pvt Ltd',
    title: 'Project Lead',
    logo: logoBriefcase,
    start: '2020',
    end: '2022',
  },
  {
    company: 'Various Companies',
    title: 'Freelance Fullstack Developer',
    logo: logoBriefcase,
    start: '2019',
    end: '2022',
  },
  {
    company: 'Principal Engineer',
    title: 'SMIDER Technology Pvt Ltd',
    logo: logoBriefcase,
    start: '2018',
    end: '2019',
  },
]
