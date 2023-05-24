'use client';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Menu() {
    return (
        <section id='menu' className='w-full h-screen'>
            <div className='w-full flex flex-row justify-between items-center pl-14 pr-14'>
                <h1 className='text-7xl'>MENU</h1>
                <Link href='/assets/pdf/menu-2022.pdf'>
                    <h2>menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </Link>
            </div>
        </section>
    )
}