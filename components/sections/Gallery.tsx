'use client';

import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import { useEffect } from 'react';
import { RESPONSIVE_LIGHTBOX } from '@constants/Constants';
import { GALLERY } from '@constants/Gallery';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function Gallery() {
    useEffect(() => {
        initLightboxJS('E09A-3D6D-76AA-D4A0', 'individual');
    });

    return (
        <section id='gallery' className='w-full h-screen flex justify-center pt-4'>
            <Carousel responsive={RESPONSIVE_LIGHTBOX} className='w-11/12'>
                <SlideshowLightbox
                    lightboxIdentifier='lightbox1'
                    framework='next'
                    images={GALLERY}
                    className='flex gap-8'
                    slideshowInterval={3000}
                    showThumbnails={true}
                >
                    <Image
                        src={GALLERY[0].src}
                        alt={GALLERY[0].alt}
                        height={0}
                        width={950}
                        data-lightboxjs='lightbox1'
                    />
                    <Image
                        src={GALLERY[1].src}
                        alt={GALLERY[1].alt}
                        height={0}
                        width={350}
                        data-lightboxjs='lightbox1'
                    />
                </SlideshowLightbox>
                <SlideshowLightbox
                    lightboxIdentifier='lightbox2'
                    framework='next'
                    images={GALLERY}
                    className='flex gap-8'
                    slideshowInterval={3000}
                    showThumbnails={true}
                >
                    <Image
                        src={GALLERY[2].src}
                        alt={GALLERY[2].alt}
                        height={0}
                        width={350}
                        data-lightboxjs='lightbox2'
                    />
                    <Image
                        src={GALLERY[3].src}
                        alt={GALLERY[3].alt}
                        height={0}
                        width={950}
                        data-lightboxjs='lightbox2'
                    />
                </SlideshowLightbox>
                <SlideshowLightbox
                    lightboxIdentifier='lightbox3'
                    framework='next'
                    images={GALLERY}
                    className='flex gap-8'
                    slideshowInterval={3000}
                    showThumbnails={true}
                >
                    <Image
                        src={GALLERY[4].src}
                        alt={GALLERY[4].alt}
                        height={0}
                        width={950}
                        data-lightboxjs='lightbox3'
                    />
                    <Image
                        src={GALLERY[5].src}
                        alt={GALLERY[5].alt}
                        height={0}
                        width={350}
                        data-lightboxjs='lightbox3'
                    />
                </SlideshowLightbox>
                <SlideshowLightbox
                    lightboxIdentifier='lightbox4'
                    framework='next'
                    images={GALLERY}
                    className='flex gap-8'
                    slideshowInterval={3000}
                    showThumbnails={true}
                >
                    <Image
                        src={GALLERY[6].src}
                        alt={GALLERY[6].alt}
                        height={0}
                        width={350}
                        data-lightboxjs='lightbox4'
                    />
                    <Image
                        src={GALLERY[7].src}
                        alt={GALLERY[7].alt}
                        height={0}
                        width={950}
                        data-lightboxjs='lightbox4'
                    />
                </SlideshowLightbox>
            </Carousel>
        </section>
    )
}