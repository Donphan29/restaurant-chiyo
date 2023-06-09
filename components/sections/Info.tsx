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
        <section id='info' className='w-full h-1/2 text-white flex flex-col items-center'>
            <div className='w-full pl-14 pr-14 pb-2 font-source text-center'>
                <h1 className='text-3xl md:text-4xl'>SALABERY-DE-VALLEYFIELD</h1>
                <p className='text-xl md:text-2xl'>209, Chemin Larocque, J6T 4B6</p>
                <p className='text-xl md:text-2xl'>(450) 373-2497</p>
            </div>
            <div className='w-full md:w-1/2 pl-14 pr-14 pt-4 justify-items-center font-open'>
                {SCHEDULE.map((schedule) => {
                    return (
                        <ScheduleItem day={schedule.day} openingHours={schedule['opening-hours']} isClosed={schedule.isClosed}></ScheduleItem>
                    )
                })}
            </div>
        </section>
    )
}