'use client';

import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import { useEffect } from 'react';
import { RESPONSIVE_LIGHTBOX, GALLERY_MOBILE } from '@constants/Constants';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function GalleryMobile() {
    useEffect(() => {
        initLightboxJS('E09A-3D6D-76AA-D4A0', 'individual');
    });

    return (
        <section id='gallery' className='w-full h-80'>
            <Carousel responsive={RESPONSIVE_LIGHTBOX} className='w-full h-full'>
                {GALLERY_MOBILE.map((image, index) => {
                    return (
                        <div className='w-full h-80 relative' key={'galleyMobileKey' + index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )
                })}
            </Carousel>
        </section >
    )
}