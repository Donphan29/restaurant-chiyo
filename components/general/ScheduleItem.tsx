export default function ScheduleItem({
    day, openingHours, isClosed
}: {
    day: string;
    openingHours: { morning: string[], evening: string[] } | { morning: null, evening: string[] } | { morning: null, evening: null } | { morning: string[], evening: null };
    isClosed: boolean;
}) {
    let schedule;

    if (isClosed) {
        schedule = (
            <p>Fermé</p>
        )
    }

    else if (openingHours.morning !== null && openingHours.evening !== null) {
        schedule = (
            <div>
                <p>{openingHours.morning[0]} AM - {openingHours.morning[1]} PM</p>
                <p>{openingHours.evening[0]} PM - {openingHours.evening[1]} PM</p>
            </div>
        )
    }

    else if (openingHours.morning !== null && openingHours.evening === null) {
        schedule = (
            <p>{openingHours.morning[0]} PM - {openingHours.morning[1]} PM</p>
        )
    }

    else if (openingHours.morning === null && openingHours.evening !== null) {
        schedule = (
            <p>{openingHours.evening[0]} PM - {openingHours.evening[1]} PM</p>
        )
    }

    return (
        <div className='w-full font-open flex flex-cols justify-center text-center text-white'>
            <p>{day} :</p>
            <div className='grid grd-rows-2 pl-2'>{schedule}</div>
        </div>
    )
}