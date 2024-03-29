'use client';

import 'react-multi-carousel/lib/styles.css';

import { RESPONSIVE_CARDS, MENUS } from '@constants/Constants';
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '@constants/Theme';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Carousel from 'react-multi-carousel';
import Link from '@mui/material/Link';
import MenuCard from '@components/general/MenuCard';

export default function Menu() {
    return (
        <section id='menu' className='w-full h-5/6'>
            <div className='w-full md:flex md:flex-row md:justify-between md:items-center pl-7 md:pl-14 md:pr-14'>
                <h1 className='font-mont_reg text-7xl'>MENU</h1>
                <ThemeProvider theme={THEME}>
                    <Link href='/assets/pdf/menu-2023.pdf' color='secondary' underline='none' className='hover:underline underline-offset-4'>
                        <h2 className='pt-4 font-open'>voir menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                    </Link>
                </ThemeProvider>
            </div>
            <Carousel responsive={RESPONSIVE_CARDS} className='pl-4 pt-4 pb-4 md:pl-14 md:pt-10 md:pb-4' partialVisible>
                {MENUS.map((menu, index) => {
                    return (<MenuCard title={menu.title} menu={menu.menu} description={menu.description} key={'menuKey' + index}></MenuCard>)
                })}
            </Carousel>;
        </section>
    )
}
