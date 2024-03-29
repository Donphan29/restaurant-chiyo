'use client';

import { ThemeProvider } from '@mui/material/styles';
import { THEME } from '@constants/Theme';

import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Link from '@mui/material/Link';
import Schedule from '@components/general/Schedule';

export default function Info() {
    return (
        <section id='info' className='w-full h-1/2 text-white flex justify-evenly mt-7'>
            <section className='flex flex-col items-center'>
                <div className='w-full pl-14 pr-14 pb-2 font-mont_reg text-center'>
                    <h1 className='text-3xl md:text-4xl'>SALABERY-DE-VALLEYFIELD</h1>
                    <ThemeProvider theme={THEME}>
                        <Link href='https://goo.gl/maps/YoTSRcaNm8XCRdy78' underline='none' color='primary' className='text-lg md:text-2xl hover:underline underline-offset-4'><PlaceIcon></PlaceIcon>209, Chemin Larocque, J6T 4B6</Link>
                        <br />
                        <Link href='tel:4503732497' underline='none' color='primary' className='text-lg md:text-2xl hover:underline underline-offset-4'><PhoneIcon></PhoneIcon>(450) 373-2497</Link>
                    </ThemeProvider>
                </div>
                <Schedule></Schedule>
            </section>
        </section>
    )
}