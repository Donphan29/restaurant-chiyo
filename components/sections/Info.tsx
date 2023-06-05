// import getSchedule from "@lib/schedule";

// async function getScheduleDates() {
//     const schedule = await getSchedule();
//     if (!schedule) throw new Error('failed to fetch schedule dates');

//     return schedule;
// }

import { SCHEDULE } from '@constants/Constants';
import ScheduleItem from '@components/general/ScheduleItem';

export default function Info() {
    // const schedule = await getScheduleDates();
    return (
        <section id='info' className='w-full h-screen text-white'>
            <div className='w-full pl-14 pr-14 pb-2 font-source'>
                <h1 className='text-3xl md:text-5xl'>SALABERY-DE-VALLEYFIELD</h1>
                <p className='text-xl md:text-2xl'>209, Chemin Larocque, J6T 4B6</p>
                <p className='text-xl md:text-2xl'>(450) 373-2497</p>
            </div>
            <hr className='border border-white w-3/4 mx-auto self-center md:hidden' />
            <div className='w-full md:w-1/2 pl-14 pr-14 pt-7 justify-items-center font-open'>
                {SCHEDULE.map((schedule) => {
                    return (
                        <ScheduleItem day={schedule.day} openingHours={schedule['opening-hours']} isClosed={schedule.isClosed}></ScheduleItem>
                    )
                })}
            </div>
        </section>
    )
}