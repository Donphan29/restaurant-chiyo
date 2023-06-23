import Async from '@components/general/Async';
import Collection from '@components/admin/Collection';
interface Database {
    db: string;
    collections: string[]
}

export default function MainArea({
    db
}: {
    db: Database
}) {
    return (
        <section className='w-2/3 outline outline-1 rounded-md font-source'>
            <Async>
                {Collection({ db: db.db, collection: db.collections[0] })}
            </Async>
        </section>
    )
}