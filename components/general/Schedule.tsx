import ScheduleItem from '@components/general/ScheduleItem';

const fetchCollection = async (db: string, collection: string) => {
    const response = await fetch(`https://restaurant-chiyo-donphan29.vercel.app/api/collection?db=${db}&collection=${collection}`)
    if (!response.ok) throw new Error(`Error code: ${response.status}`)
    return response.json()
}

export default async function Schedule() {
    const SCHEDULE = await fetchCollection('information', 'schedule');
    return (
        <div className='w-full pl-14 pr-14 pt-4 justify-items-center font-open'>
            {SCHEDULE.data?.map((schedule: { day: string, hours: { morning: string[], evening: string[] } | { morning: null, evening: string[] } | { morning: null, evening: null } | { morning: string[], evening: null }, isClosed: boolean, order: number }, index: number) => {
                return (
                    <ScheduleItem day={schedule.day} openingHours={schedule.hours} isClosed={schedule.isClosed} key={'scheduleKey' + index}></ScheduleItem>
                )
            })}
        </div>
    )
}