'use client';

import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function Gallery() {
    useEffect(() => {
        initLightboxJS('E09A-3D6D-76AA-D4A0', 'individual');
    });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const photos1 = [
        {
            src: '/assets/images/gallery/pizza.webp',
            alt: 'pizza',
        },
        {
            src: '/assets/images/gallery/sushi2.webp',
            alt: 'sushi2',
        },
        {
            src: '/assets/images/gallery/anana.webp',
            alt: 'anana',
        },
        {
            src: '/assets/images/gallery/sushi1.webp',
            alt: 'sushi1',
        }
    ]

    return (
        <section id='gallery' className='w-full h-screen'>
            <div>
                <Carousel responsive={responsive}>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox1'
                        framework='next'
                        images={photos1}
                        className='grid grid-cols-3 grid-flow-col gap-4'
                    >
                        <Image
                            src={photos1[0].src}
                            alt={photos1[0].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox1"
                            className='row-span-2 rounded'
                        />
                        <Image
                            src={photos1[1].src}
                            alt={photos1[1].alt}
                            width={500}
                            height={250}
                            data-lightboxjs="lightbox1"
                            className='rounded'
                        />
                        <Image
                            src={photos1[2].src}
                            alt={photos1[2].alt}
                            width={500}
                            height={250}
                            data-lightboxjs="lightbox1"
                            className='rounded'
                        />
                        <Image
                            src={photos1[3].src}
                            alt={photos1[3].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox1"
                            className='row-span-2 rounded'
                        />
                    </SlideshowLightbox>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox2'
                        framework='next'
                        images={photos1}
                        className='grid grid-cols-3 grid-flow-col gap-4'
                    >
                        <Image
                            src={photos1[0].src}
                            alt={photos1[0].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox2"
                            className='row-span-2 rounded'
                        />
                        <Image
                            src={photos1[1].src}
                            alt={photos1[1].alt}
                            width={500}
                            height={250}
                            data-lightboxjs="lightbox2"
                            className='col-span-2 rounded'
                        />
                    </SlideshowLightbox>
                </Carousel>
            </div>
        </section>
    )
}