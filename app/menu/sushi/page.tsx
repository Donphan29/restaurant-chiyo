import getCollection from '@lib/collection';
import MenuItem from '@components/general/MenuItem';

async function getSashimi() {
    const items = await getCollection('sushi', 'sashimi');
    if (!items) throw new Error('failed to fetch sashimi items');

    return items;
}

async function getMiniMaki() {
    const items = await getCollection('sushi', 'mini-maki');
    if (!items) throw new Error('failed to fetch mini maki items');

    return items;
}

async function getTartare() {
    const items = await getCollection('sushi', 'tartare');
    if (!items) throw new Error('failed to fetch tartare items');

    return items;
}

async function getFutomakiExt() {
    const items = await getCollection('sushi', 'futomaki-ext');
    if (!items) throw new Error('failed to fetch futomaki-ext items');

    return items;
}

async function getFutomakiInt() {
    const items = await getCollection('sushi', 'futomaki-int');
    if (!items) throw new Error('failed to fetch futomaki-int items');

    return items;
}

async function getCombo() {
    const items = await getCollection('sushi', 'combo');
    if (!items) throw new Error('failed to fetch combo items');

    return items;
}

async function getMaki() {
    const items = await getCollection('sushi', 'maki');
    if (!items) throw new Error('failed to fetch maki items');

    return items;
}

async function getFried() {
    const items = await getCollection('sushi', 'fried');
    if (!items) throw new Error('failed to fetch fried items');

    return items;
}

async function getSpecialty() {
    const items = await getCollection('sushi', 'specialty');
    if (!items) throw new Error('failed to fetch specialty items');

    return items;
}

async function getExtra() {
    const items = await getCollection('sushi', 'extra');
    if (!items) throw new Error('failed to fetch extra items');

    return items;
}

export default async function Sushi() {
    const SASHIMI = await getSashimi();
    const MINI_MAKI = await getMiniMaki();
    const TARTARE = await getTartare();
    const FUTOMAKI_EXT = await getFutomakiExt();
    const FUTOMAKI_INT = await getFutomakiInt();
    const COMBO = await getCombo();
    const MAKI = await getMaki();
    const FRIED = await getFried();
    const SPECIALTY = await getSpecialty();
    const EXTRA = await getExtra();

    return (
        <section className='w-full'>
            <div
                className='w-full h-36 md:h-64 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu/sushi.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Sushi</h1>
            </div>

            <section className='w-full flex flex-col justify-center items-center text-white pt-12'>
                <section className='w-3/4 md:flex md:justify-between'>
                    <section className='w-full md:w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Sushi 2mcx/Sashimi 3mcx</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {SASHIMI.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'sashimi_key' + index}>
                                    <p>{item.name}/<i className='text-xs'>{item.description}</i></p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Minis Makis 8 mcx</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {MINI_MAKI.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'mini_key' + index}>
                                    <p>{item.name}/<i className='text-xs'>{item.description}</i></p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Tartares</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {TARTARE.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'tartare_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Mélange avec caviar, tempura, mayo et salade</i></p>
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Futomakis 5 mcx</b></p>
                    <p className='text-center text-xs'><i>*Gros rouleaux avec riz à l&apos;extérieur</i></p>
                    <section className='w-full grid md:grid-cols-3 gap-5 md:gap-7 pt-4'>
                        {FUTOMAKI_EXT.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} key={'futo_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Futomakis 5 mcx</b></p>
                    <p className='text-center text-xs'><i>*Gros rouleaux avec riz à l&apos;intérieur</i></p>
                    <section className='w-full grid md:grid-cols-3 gap-5 md:gap-7 pt-4'>
                        {FUTOMAKI_INT.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} key={'futo_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Combinaisons</b></p>
                    <p className='text-center text-xs'><i>*Soupe au choix (Légumes, Won Ton, Citro, Coco ou Miso)</i></p>
                    <p className='text-center text-xs'><i>*Thé de jasmin ou café</i></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {COMBO.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} pieces={item.pieces} key={'combo_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 md:flex md:justify-between sm:pt-7 md:pt-12'>
                    <section className='w-full md:w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Makis 8 mcx</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {MAKI.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'maki_key' + index}>
                                    <p>{item.name}/<i className='text-xs'>{item.description}</i></p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Moyen rouleau avec riz à l&apos;extérieur</i></p>
                    </section>

                    <section className='w-full md:w-1/2 flex flex-col sm:pt-7'>
                        <p className='text-lg font-source'><b>Les Frits 7 mcx</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {FRIED.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'fried_key' + index}>
                                    <p>{item.name}/<i className='text-xs'>{item.description}</i></p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Rouleaux nappés d&apos;une sauce mayonnaise épicée</i></p>
                    </section>
                </section>

                <section className='w-3/4 md:flex md:justify-between pt-10'>
                    <section className='w-full md:w-3/4 flex flex-col'>
                        <p className='text-lg text-center font-source'><b>Les Spécialités du Chef</b></p>
                        <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                            {SPECIALTY.data?.map((item, index) => {
                                return (<MenuItem name={item.name} description={item.description} price={item.price} pieces={item.pieces} key={'special_key' + index}></MenuItem>)
                            })}
                        </section>
                    </section>

                    <section className='w-full md:w-1/5 flex flex-col md:mt-auto sm:pt-7'>
                        {EXTRA.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'extra_key' + index}>
                                    <p><i>{item.name}</i></p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>

            </section>
        </section>
    )
}