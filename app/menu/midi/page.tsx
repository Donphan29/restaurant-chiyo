import getCollection from '@lib/collection';
import MenuItem from '@components/general/MenuItem';

async function getEntree() {
    const items = await getCollection('midi', 'entree');
    if (!items) throw new Error('failed to fetch entree items');

    return items;
}

async function getGrilling() {
    const items = await getCollection('midi', 'grilling');
    if (!items) throw new Error('failed to fetch grilling items');

    return items;
}

async function getStir() {
    const items = await getCollection('midi', 'stir-fry');
    if (!items) throw new Error('failed to fetch stir-fry items');

    return items;
}

async function getCombo() {
    const items = await getCollection('midi', 'combo');
    if (!items) throw new Error('failed to fetch combo items');

    return items;
}

async function getSoup() {
    const items = await getCollection('midi', 'soup');
    if (!items) throw new Error('failed to fetch soup items');

    return items;
}

export default async function Midi() {
    const ENTREE = await getEntree();
    const GRILLING = await getGrilling();
    const STIR = await getStir();
    const COMBO = await getCombo();
    const SOUP = await getSoup();

    return (
        <section className='w-full'>
            <div
                className='w-full h-36 md:h-64 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu/midi.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Menu Midi</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center text-white '>
                <p className='text-center pt-4'>*Tous les repas sauf les entrées incluent un biscuit, thé ou café</p>

                <section className='w-3/4 md:w-3/5 md:flex md:justify-between pt-4'>
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
                        <p className='text-lg font-source'><b>Les Grillades</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {GRILLING.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'grilling_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Servis avec Riz ou Vermicelles, et Salade</i></p>
                    </section>
                </section>

                <section className='w-3/4 md:w-3/5 md:flex md:justify-between pt-7'>
                    <section className='w-full md:w-3/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Sautés</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {STIR.data?.map((item, index) => {
                            if (item.order === 9) return (
                                <div className='w-full font-open'>
                                    <p>{item.name}</p>
                                    <div className='w-full grid grid-cols-3'>
                                        <p className='indent-12 col-span-2'>{item.type[0]}</p>
                                        <p className='text-right'>{item.price[0]}</p>
                                        <p className='indent-12 col-span-2'>{item.type[1]}</p>
                                        <p className='text-right'>{item.price[1]}</p>
                                        <p className='indent-12 col-span-2'>{item.type[2]}</p>
                                        <p className='text-right'>{item.price[2]}</p>
                                    </div>
                                </div>
                            )

                            return (
                                <div className='w-full flex justify-between font-open' key={'stir_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Servis avec Riz ou Vermicelles</i></p>
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/4 flex flex-col'>
                        <p className='text-lg font-source'><b>Les Soupes Repas</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {SOUP.data?.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'soup_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                        <p className='text-center text-xs pt-2'><i>*Servies avec Rouleau Impérial</i></p>
                    </section>
                </section>

                <section className='w-3/4 md:w-3/5 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Les Combinaisons</b></p>
                    <p className='text-center text-xs'><i>*Servies avec Soupe Won Ton ou Légumes, Vermicelles et Rouleau Impérial</i></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {COMBO.data?.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} key={'combo_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}