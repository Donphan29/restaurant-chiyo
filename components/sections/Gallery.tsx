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
            <div className='w-full flex justify-center'>
                <Carousel responsive={RESPONSIVE_LIGHTBOX} className='w-11/12'>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox2'
                        framework='next'
                        images={GALLERY}
                        className='grid grid-cols-3 gap-8'
                    >
                        <div className='relative col-span-2 rounded'>
                            <Image
                                src={GALLERY[1].src}
                                alt={GALLERY[1].alt}
                                fill={true}
                                data-lightboxjs='lightbox2'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <Image
                            src={GALLERY[0].src}
                            alt={GALLERY[0].alt}
                            width={400}
                            height={400}
                            data-lightboxjs='lightbox2'
                        />
                    </SlideshowLightbox>
                    <SlideshowLightbox
                        lightboxIdentifier='lightbox'
                        framework='next'
                        images={GALLERY}
                        className='grid grid-cols-3 gap-4'
                    >
                        <Image
                            src={GALLERY[2].src}
                            alt={GALLERY[2].alt}
                            width={400}
                            height={400}
                            data-lightboxjs='lightbox'
                            className='rounded'
                        />
                        <div className='relative col-span-2 rounded'>
                            <Image
                                src={GALLERY[3].src}
                                alt={GALLERY[3].alt}
                                fill={true}
                                data-lightboxjs='lightbox'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </SlideshowLightbox>
                </Carousel>
            </div>
        </section>
    )
}