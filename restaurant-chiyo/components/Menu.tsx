'use client';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Menu() {
    return (
        <section className='w-full h-screen'>
            <div className='w-full flex flex-row justify-between gap-2 items-center pl-14 pr-14'>
                <h1 className='text-7xl'>MENU</h1>
                <a href='/assets/pdf/menu-2022.pdf'>
                    <h2>menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </a>
            </div>
        </section>
    )
}