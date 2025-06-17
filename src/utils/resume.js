import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoHoppscotch from "@/images/logos/hoppscotch.svg"
import logoWork from "@/images/logos/work.svg"
import { BriefcaseIcon } from '@/components/BriefcaseIcon'

export const resume = [
    {
        company: 'Hanomi',
        title: 'Full Stack Engineering Contractor',
        logo: logoWork,
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
        end: "2024",
    },
    {
        company: 'Osure Care Pvt Ltd',
        title: 'Project Lead',
        logo: logoWork,
        start: '2020',
        end: '2022',
    },
    {
        company: "Various Companies",
        title: 'Freelance Fullstack Developer',
        logo: logoWork,
        start: '2019',
        end: '2022',
    },
    {
        company: 'Principal Engineer',
        title: 'SMIDER Technology Pvt Ltd',
        logo: logoWork,
        start: '2018',
        end: '2019',
        },
]