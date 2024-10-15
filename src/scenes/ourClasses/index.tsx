import { ClassType, SelectedPage } from '@/shared/types'

import { motion } from 'framer-motion'
import Heading from '@/shared/Heading'

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { classes } from './classesArr'
import Class from './Class'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <Heading>Our classes</Heading>
                        <p className="py-5 ">
                            Our classes offer a wide range of options to suit
                            your fitness goals. From high-intensity interval
                            training to gentle yoga, we have something for
                            everyone. Our experienced instructors will guide you
                            through every step of your workout, ensuring you get
                            the most out of each session.
                        </p>
                    </div>
                </motion.div>
                <div className="flex justify-center items-center">
                    <Carousel className="w-full max-w-xs md:max-w-4xl">
                        <CarouselContent>
                            {classes.map((singleClass: ClassType) => (
                                <Class
                                    key={singleClass.name}
                                    name={singleClass.name}
                                    description={singleClass.description}
                                    image={singleClass.image}
                                />
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
