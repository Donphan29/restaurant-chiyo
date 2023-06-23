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
            <p>db is : {db}</p>
            <p>collection is : {collection}</p>
            {COLLECTION.data?.map((item: { name: string, description?: string, price: number, }) => {
                return (
                    <p>{item.name}</p>
                )
            })}
        </section>
    )
}
