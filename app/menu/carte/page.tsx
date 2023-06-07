import getCollection from '@lib/getCollection';
import MenuItem from '@components/general/MenuItem';

async function getEntrees() {
    const items = await getCollection('carte', 'entrees');
    if (!items) throw new Error('failed to fetch entrees items');

    return items;
}

async function getSoup() {
    const items = await getCollection('carte', 'soup');
    if (!items) throw new Error('failed to fetch soup items');

    return items;
}

async function getVegetarian() {
    const items = await getCollection('carte', 'vegetarian');
    if (!items) throw new Error('failed to fetch vegetarian items');

    return items;
}

async function getPad() {
    const items = await getCollection('carte', 'pad-thai');
    if (!items) throw new Error('failed to fetch pad-thai items');

    return items;
}

async function getNoodle() {
    const items = await getCollection('carte', 'noodle');
    if (!items) throw new Error('failed to fetch noodle items');

    return items;
}

async function getGrilling() {
    const items = await getCollection('carte', 'grilling');
    if (!items) throw new Error('failed to fetch grilling items');

    return items;
}

async function getSautees() {
    const items = await getCollection('carte', 'sautees');
    if (!items) throw new Error('failed to fetch sautees items');

    return items;
}

export default async function Carte() {
    const ENTREES = await getEntrees();
    const SOUP = await getSoup();
    const VEGETARIAN = await getVegetarian();
    const PAD = await getPad();
    const NOODLE = await getNoodle();
    const GRILLING = await getGrilling();
    const SAUTEES = await getSautees();

    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/3 bg-cover bg-[center_60rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-carte.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>À la carte</h1>
            </div>

            <section className='w-full flex flex-col justify-center items-center text-white pt-12'>
                <section className='w-3/4 flex justify-between'>
                    <section className='w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Entrées</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {ENTREES.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Soupes</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {SOUP.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex justify-between pt-12'>
                    <section className='w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Plats Végétariens</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {VEGETARIAN.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-1/4 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Pad Thai</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {PAD.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Nouilles Croustillantes</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {NOODLE.data?.map((item) => {
                            return (
                                <div className='w-full flex justify-between font-open'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Grillades à l'asiatique</b></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {GRILLING.data?.map((item) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} ></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Sautés</b></p>
                    <p className='text-center text-xs'><i>*Servie avec choix de riz ou vermicelles</i></p>
                    <section className='w-full grid md:grid-cols-3 gap-5 md:gap-7 pt-4'>
                        {SAUTEES.data?.map((item) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} ></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}