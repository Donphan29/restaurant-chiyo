import getCollection from '@lib/getCollection';
import MenuItem from '@components/general/MenuItem';

async function getEntrees() {
    const items = await getCollection('midi', 'entrees');
    if (!items) throw new Error('failed to fetch entrees items');

    return items;
}

async function getGrillades() {
    const items = await getCollection('midi', 'grillades');
    if (!items) throw new Error('failed to fetch grillades items');

    return items;
}

async function getSautees() {
    const items = await getCollection('midi', 'sautees');
    if (!items) throw new Error('failed to fetch sautees items');

    return items;
}

async function getCombos() {
    const items = await getCollection('midi', 'combo');
    if (!items) throw new Error('failed to fetch combo items');

    return items;
}

async function getSoups() {
    const items = await getCollection('midi', 'soup');
    if (!items) throw new Error('failed to fetch soup items');

    return items;
}

export default async function Midi() {
    const entrees = await getEntrees();
    const grillades = await getGrillades();
    const sautees = await getSautees();
    const combos = await getCombos();
    const soups = await getSoups();

    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/6 md:h-1/3 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-midi.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Menu Midi</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center text-white '>
                <p className='text-center pt-4'>
                    *Tous les repas incluent un biscuit, thé ou café*
                </p>

                <section className='w-3/4 md:w-3/5 flex justify-between pt-4'>
                    <section className='w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Entrées</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {entrees.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Grillades</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {grillades.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 md:w-3/5 flex justify-between pt-4'>
                    <section className='w-3/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Sautées</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {sautees.data?.slice(0, -1).map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        {sautees.data?.slice(-1).map((item) => {
                            return (
                                <div className='w-full font-open'>
                                    <p>{item.name}</p>
                                    <div className='w-full grid grid-cols-2'>
                                        <p className='indent-24'>{item.type[0]}</p>
                                        <p className='text-right'>{item.price[0]}</p>
                                        <p className='indent-24'>{item.type[1]}</p>
                                        <p className='text-right'>{item.price[1]}</p>
                                        <p className='indent-24'>{item.type[2]}</p>
                                        <p className='text-right'>{item.price[2]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-1/4 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Soupes Repas</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {soups.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 md:w-3/5 flex flex-col pt-12'>
                    <p className='text-lg text-center font-source'><b>Les Combinaisons</b></p>
                    <section className='w-full grid md:grid-cols-2 md:grid-rows-2 gap-5 md:gap-7 pt-4'>
                        {combos.data?.map((item) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} ></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}