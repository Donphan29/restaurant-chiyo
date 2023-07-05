import getCollection from '@lib/collection';
import MenuItem from '@components/general/MenuItem';

async function getTableDhote() {
    const items = await getCollection('menu', 'table_dhote');
    if (!items) throw new Error('failed to fetch table_dhote items');

    return items;
}

export default async function Table() {
    const TABLE = await getTableDhote();

    return (
        <section className='w-full'>
            <div
                className='w-full h-36 md:h-64 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu/table.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Table d'hôte</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center font-mont_reg text-white '>
                <section className='w-5/6 text-center pt-4 pl-2 pr-2'>
                    <p>Servis avec / <i>served with</i></p>
                    <p className='pt-4'>Soupe au choix (Légumes, Won Ton, Citro, Coco ou Miso)</p>
                    <p className='text-xs'><i>Choice of soup (Vegetables, Won Ton, Citro, Coco or Miso)</i></p>
                    <p className='pt-6'>Rouleau impérial (frit) ou printemps au poulet (froid)</p>
                    <p className='text-xs'><i>Imperialroll (hot) or chicken springroll (cold)</i></p>
                    <p className='pt-6'>Thé de jasmin ou café (Déssert non-inclus)</p>
                    <p className='text-xs'><i>Jasmin tea or coffee (Dessert not included)</i></p>
                </section>

                <section className='w-3/4 grid md:grid-cols-2 md:grid-rows-2 gap-5 md:gap-7 pt-7'>
                    {TABLE.data?.map((item, index) => {
                        return (<MenuItem name={item.name} description={item.english} price={item.price} key={'table_key' + index}></MenuItem>)
                    })}
                </section>
            </section>
        </section>
    )
}