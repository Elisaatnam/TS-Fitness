import { CarouselItem } from '@/components/ui/carousel'

type Props = {
    name: string
    description?: string
    image: string
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
  h-full w-full flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`

    return (
        <CarouselItem className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={name} />
        </CarouselItem>
    )
}

export default Class
