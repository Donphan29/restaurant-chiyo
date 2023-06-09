'use client';

import 'react-multi-carousel/lib/styles.css';

import { RESPONSIVE_CARDS, MENUS } from '@constants/Constants';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Carousel from 'react-multi-carousel';
import Link from '@mui/material/Link';
import MenuCard from '@components/general/MenuCard';

export default function Menu() {
    return (
        <section id='menu' className='w-full h-5/6'>
            <div className='w-full md:flex md:flex-row md:justify-between md:items-center pl-7 md:pl-14 md:pr-14'>
                <h1 className='font-mont_reg text-7xl'>MENU</h1>
                <Link href='/assets/pdf/menu-2022.pdf'>
                    <h2 className='pt-4 font-source'>voir menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </Link>
            </div>
            <Carousel responsive={RESPONSIVE_CARDS} className='pl-4 pt-4 md:pl-14 md:pt-10 pb-14' partialVisible>
                {MENUS.map((menu) => {
                    return (<MenuCard title={menu.title} menu={menu.menu} description={menu.description}></MenuCard>)
                })}
            </Carousel>;
        </section>
    )
}
