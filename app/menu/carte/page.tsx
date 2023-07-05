import getCollection from '@lib/collection';
import MenuItem from '@components/general/MenuItem';

async function getEntree() {
    const items = await getCollection('carte', 'entree');
    if (!items) throw new Error('failed to fetch entree items');

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

async function getStir() {
    const items = await getCollection('carte', 'stir-fry');
    if (!items) throw new Error('failed to fetch stir-fry items');

    return items;
}

export default async function Carte() {
    const ENTREE = await getEntree();
    const SOUP = await getSoup();
    const VEGETARIAN = await getVegetarian();
    const PAD = await getPad();
    const NOODLE = await getNoodle();
    const GRILLING = await getGrilling();
    const STIR = await getStir();

    return (
        <section className='w-full'>
            <div
                className='w-full h-36 md:h-64 bg-cover bg-[center_60rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu/carte.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>À la carte</h1>
            </div>

            <section className='w-full flex flex-col justify-center items-center text-white pt-12'>
                <section className='w-3/4 md:flex md:justify-between'>
                    <section className='w-full md:w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Entrées</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {ENTREE.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'entree_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Soupes</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {SOUP.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'soup_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 md:flex md:justify-between pt-7'>
                    <section className='w-full md:w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Plats Végétariens</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {VEGETARIAN.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'vege_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/4 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Pad Thai</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {PAD.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'pad_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Nouilles Croustillantes</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {NOODLE.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'noodle_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Grillades à l&apos;asiatique</b></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {GRILLING.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'grlling_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Sautés</b></p>
                    <p className='text-center text-xs'><i>*Servie avec choix de riz ou vermicelles</i></p>
                    <section className='w-full grid md:grid-cols-3 gap-5 md:gap-7 pt-4'>
                        {STIR.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'stir_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}