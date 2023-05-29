'use client';

import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
    useEffect(() => {
        initLightboxJS('E09A-3D6D-76AA-D4A0', 'individual');
    });

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
                <SlideshowLightbox
                    lightboxIdentifier='lightbox1'
                    framework='next'
                    images={photos1}
                    className='w-full h-screen grid grid-cols-3 grid-flow-col gap-4 relative'
                >
                    <Image
                        src={photos1[0].src}
                        alt={photos1[0].alt}
                        width={500}
                        height={500}
                        data-lightboxjs="lightbox1"
                        className='row-span-2 rounded-lg'
                    />
                    <Image
                        src={photos1[1].src}
                        alt={photos1[1].alt}
                        width={500}
                        height={250}
                        data-lightboxjs="lightbox1"
                        className='rounded-lg'
                    />
                    <Image
                        src={photos1[2].src}
                        alt={photos1[2].alt}
                        width={500}
                        height={250}
                        data-lightboxjs="lightbox1"
                        className='rounded-lg'
                    />
                    <Image
                        src={photos1[3].src}
                        alt={photos1[3].alt}
                        width={500}
                        height={500}
                        data-lightboxjs="lightbox1"
                        className='row-span-2 rounded-lg'
                    />
                </SlideshowLightbox>
            </div>
        </section>
    )
}