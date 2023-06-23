const fetchCollection = async (db: string, collection: string) => {
    const response = await fetch(`http://localhost:3000/api/collection?db=${db}&collection=${collection}`)
    if (!response.ok) throw new Error(`Error code: ${response.status}`)
    return response.json()
}

export default async function Collection({
    db, collection
}: {
    db: string;
    collection: string;
}) {
    const COLLECTION = await fetchCollection(db, collection);

    return (
        <section>
            {COLLECTION.data?.map((item: { name: string, description?: string, english?: string, price: number }, index: number) => {
                return (
                    <section className='flex pb-4 gap-4'>
                        <p>{index + 1}</p>
                        <section>
                            <p>Name: {item.name}</p>
                            {item.description ? <p>Description: {item.description}</p> : <></>}
                            {item.english ? <p>English: {item.english}</p> : <></>}
                            <p>Price: {item.price}</p>
                        </section>
                    </section>
                )
            })}
        </section>
    )
}
