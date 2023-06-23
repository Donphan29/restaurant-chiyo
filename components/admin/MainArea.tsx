import Async from '@components/general/Async';
import Collection from '@components/admin/Collection';

export default function MainArea({
    collection
}: {
    collection: string
}) {
    return (
        <section className='w-2/3 outline outline-1 rounded-md font-source'>
            <Async>
                {Collection({ db: 'carte', collection: collection })}
            </Async>
        </section>
    )
}