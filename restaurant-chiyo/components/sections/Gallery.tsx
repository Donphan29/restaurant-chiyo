'use client';

import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect } from 'react';
import { RESPONSIVE_LIGHTBOX, GALLERY } from '@constants/Constants';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function Gallery() {
    useEffect(() => {
        initLightboxJS('E09A-3D6D-76AA-D4A0', 'individual');
    });

    return (
        <section id='gallery' className='w-full h-screen'>
            <div>
                <Carousel responsive={RESPONSIVE_LIGHTBOX}>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox1'
                        framework='next'
                        images={GALLERY}
                        className='grid grid-cols-3 grid-flow-col gap-4'
                    >
                        <Image
                            src={GALLERY[0].src}
                            alt={GALLERY[0].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox1"
                            className='row-span-2 rounded'
                        />
                        <Image
                            src={GALLERY[1].src}
                            alt={GALLERY[1].alt}
                            width={500}
                            height={250}
                            data-lightboxjs="lightbox1"
                            className='rounded'
                        />
                        <Image
                            src={GALLERY[2].src}
                            alt={GALLERY[2].alt}
                            width={500}
                            height={250}
                            data-lightboxjs="lightbox1"
                            className='rounded'
                        />
                        <Image
                            src={GALLERY[3].src}
                            alt={GALLERY[3].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox1"
                            className='row-span-2 rounded'
                        />
                    </SlideshowLightbox>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox2'
                        framework='next'
                        images={GALLERY}
                        className='grid grid-cols-3 grid-flow-col gap-4'
                    >
                        <Image
                            src={GALLERY[0].src}
                            alt={GALLERY[0].alt}
                            width={500}
                            height={500}
                            data-lightboxjs="lightbox2"
                            className='row-span-2 rounded'
                        />
                        <Image
                            src={GALLERY[1].src}
                            alt={GALLERY[1].alt}
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