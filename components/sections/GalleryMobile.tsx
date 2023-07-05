'use client';

import { RESPONSIVE_LIGHTBOX } from '@constants/Constants';
import { GALLERY_MOBILE } from '@constants/Gallery';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function GalleryMobile() {
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