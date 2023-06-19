'use client';

// import getSchedule from "@lib/schedule";

// async function getScheduleDates() {
//     const schedule = await getSchedule();
//     if (!schedule) throw new Error('failed to fetch schedule dates');

//     return schedule;
// }

import { SCHEDULE } from '@constants/Constants';
import ScheduleItem from '@components/general/ScheduleItem';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

export default function Info() {
    // const schedule = await getScheduleDates();
    return (
        <section id='info' className='w-full h-1/2 text-white flex justify-evenly mt-14'>
            <section className='flex flex-col items-center'>
                <div className='w-full pl-14 pr-14 pb-2 font-source text-center'>
                    <h1 className='text-3xl md:text-4xl'>SALABERY-DE-VALLEYFIELD</h1>
                    <a href='https://goo.gl/maps/YoTSRcaNm8XCRdy78' className='text-lg md:text-2xl'><PlaceIcon></PlaceIcon> 209, Chemin Larocque, J6T 4B6</a>
                    <br />
                    <a href='tel:4503732497' className='text-lg md:text-2xl'><PhoneIcon></PhoneIcon> (450) 373-2497</a>
                </div>
                <div className='w-full pl-14 pr-14 pt-4 justify-items-center font-open'>
                    {SCHEDULE.map((schedule) => {
                        return (
                            <ScheduleItem day={schedule.day} openingHours={schedule['opening-hours']} isClosed={schedule.isClosed}></ScheduleItem>
                        )
                    })}
                </div>
            </section>
            <section className='sm:hidden'>
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=209+Chem.+Larocque,+Salaberry-de-Valleyfield,+QC+J6T+4B6&zoom=16&size=600x400&maptype=place&key=AIzaSyA2yKIay3D7F3daQTyVv3j3KPmz0fE16yk&map_id=a171e137b3c9f6c&signature=B5BXvm3T6NMaaWueL22ZzAy4otA=" />
            </section>
        </section>
    )
}