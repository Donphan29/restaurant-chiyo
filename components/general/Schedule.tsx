import ScheduleItem from '@components/general/ScheduleItem';
import { SCHEDULE } from '@constants/Constants';

export default function Schedule() {
    return (
        <div className='w-full pl-14 pr-14 pt-4 justify-items-center font-open'>
            {SCHEDULE.map((schedule: { day: string, hours: { morning: string[], evening: string[] } | { morning: null, evening: string[] } | { morning: null, evening: null } | { morning: string[], evening: null }, isClosed: boolean }, index: number) => {
                return (
                    <ScheduleItem day={schedule.day} openingHours={schedule.hours} isClosed={schedule.isClosed} key={'scheduleKey' + index}></ScheduleItem>
                )
            })}
        </div>
    )
}