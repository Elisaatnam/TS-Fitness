import { BenefitType } from '@/shared/types'
import {
    AcademicCapIcon,
    HomeModernIcon,
    UserGroupIcon,
} from '@heroicons/react/24/solid'

export const benefitsArr: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'Our gym is equipped with the latest fitness equipment and technology, so you can get the most out of your workout.',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            'We offer a wide variety of classes to suit all fitness levels and interests, from yoga and Pilates to HIIT and strength training.',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainers',
        description:
            'Our trainers are highly qualified and experienced, and they are dedicated to helping you reach your fitness goals.',
    },
]
