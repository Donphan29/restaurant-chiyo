import getTableDhote from '@lib/table';
import MenuItem from '@components/general/MenuItem';

async function getMenuItems() {
    const items = await getTableDhote();
    if (!items) throw new Error('failed to fetch table dhote items');

    return items;
}

export default async function Table() {
    const items = await getMenuItems();

    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/3 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-table.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Table d'hôte</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center font-mont_reg text-white '>

                <section className='text-center pt-4 pl-2 pr-2'>
                    <p>Servis avec / <i>served with</i></p>
                    <p className='pt-4'>Soupe au choix (Légumes, Won Ton, Citro, Coco ou Miso)</p>
                    <p className='text-sm'><i>Choice of soup (Vegetables, Won Ton, Citro, Coco or Miso)</i></p>
                    <p className='pt-4'>Rouleau impérial (frit) ou printemps au poulet (froid)</p>
                    <p className='text-sm'><i>Imperialroll (hot) or chicken springroll (cold)</i></p>
                </section>

                <section className='w-5/6 grid grid-cols-2 grid-rows-2 justify-around gap-5 pt-4'>
                    {items.table_dhote?.map((item) => {
                        return (<MenuItem name={item.name} english={item.english} price={item.price} ></MenuItem>)
                    })}
                </section>
            </section>
        </section>
    )
}