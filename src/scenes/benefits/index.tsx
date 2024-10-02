import Heading from '@/shared/Heading'
import { BenefitType, SelectedPage } from '@/shared/types'
import { benefitsArr } from './benefitsArr'
import { motion } from 'framer-motion'
import BenefitCard from './BenefitCard'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

//% for Framer Motion
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.33 },
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Heading>More than just a gym</Heading>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and
                        classes to get you to your ultimate fitness goals with
                        ease. We provide true care into each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="md:flex mt-5 items-center justify-between gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefitsArr.map((benefit: BenefitType) => (
                        <BenefitCard
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* "Millions of Happy Members" Section */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img
                        className="mx-auto "
                        src={BenefitsPageGraphic}
                        alt="benefits-page-graphic"
                    />
                    {/* Description */}
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.75 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <Heading>
                                        Millions of happy menbers are getting{' '}
                                        <span className="text-primary-500">
                                            fit
                                        </span>
                                    </Heading>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.25, duration: 0.75 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Whether you're looking to build muscle, lose
                                weight, or improve your overall health, we have
                                a program that's right for you. Experience the
                                benefits of regular exercise, including
                                increased energy, reduced stress, and a stronger
                                sense of well-being.
                            </p>
                            <p className="mb-5">
                                Join our thriving community of fitness
                                enthusiasts and achieve your health goals. With
                                expert guidance and a supportive environment,
                                you'll discover the joy of movement and unlock
                                your full potential.
                            </p>
                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
