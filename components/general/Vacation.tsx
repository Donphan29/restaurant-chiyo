const fetchCollection = async (db: string, collection: string) => {
    const response = await fetch(`https://restaurant-chiyo-donphan29.vercel.app//api/collection?db=${db}&collection=${collection}`)
    if (!response.ok) throw new Error(`Error code: ${response.status}`)
    return response.json()
}

export default async function Vacation() {
    const VACATION = await fetchCollection('information', 'vacation');
    return (
        <div className='w-full pl-14 pr-14 pt-4 justify-items-center font-open'>
            {VACATION.data?.map((item: { isVacation: boolean, start: string, end: string }, index: number) => {
                if (!item.isVacation) return (
                    <div key={'vacation_key' + index}></div>
                )
                return (
                    <section className='text-center font-open' key={'vacation_key' + index}>
                        <p>*Attention nous serons fermés du {item.start} au {item.end}</p>
                        <p>À bientôt!</p>
                    </section>
                )
            })}
        </div>
    )
}