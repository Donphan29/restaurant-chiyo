'use client';

import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <section className='w-full h-1/6 pl-7 pr-7 pt-14 pb-3 flex flex-wrap justify-between content-center text-slate-200 text-xs'>
            <p className='font-source'><i>@ 2025 Restaurant Chiyo</i></p>
            <a href='https://www.facebook.com/profile.php?id=100057120744279'><FacebookIcon></FacebookIcon></a>
        </section>
    )
}