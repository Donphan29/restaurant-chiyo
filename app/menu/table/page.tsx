import getCollection from '@lib/getCollection';
import MenuItem from '@components/general/MenuItem';

async function getTableDhote() {
    const items = await getCollection('menus', 'table_dhote');
    if (!items) throw new Error('failed to fetch table dhote items');

    return items;
}

export default async function Table() {
    const items = await getTableDhote();

    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/6 md:h-1/3 bg-cover bg-[center_55rem] md:bg-[center_65rem] flex flex-col justify-center items-center'
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
                    {items.data?.map((item) => {
                        return (<MenuItem name={item.name} description={item.english} price={item.price} ></MenuItem>)
                    })}
                </section>
            </section>
        </section>
    )
}