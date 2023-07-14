import getCollection from '@lib/collection';
import MenuItem from '@components/general/MenuItem';

async function getDesert() {
    const items = await getCollection('menu', 'desert');
    if (!items) throw new Error('failed to fetch desert items');

    return items;
}

async function getBeverage() {
    const items = await getCollection('menu', 'beverages');
    if (!items) throw new Error('failed to fetch beverages items');

    return items;
}

export default async function Desert() {
    const DESERT = await getDesert();
    const BEVERAGE = await getBeverage();

    return (
        <section className='w-full'>
            <div
                className='w-full h-36 md:h-64 bg-cover bg-[center_30rem] md:bg-[center_115rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu/desert.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Déssert</h1>
            </div>

            <section className='w-full flex flex-col justify-center items-center text-white pt-4'>
                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Désserts</b></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {DESERT.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'desert_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Breuvages</b></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {BEVERAGE.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'bev_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section>
    )
}