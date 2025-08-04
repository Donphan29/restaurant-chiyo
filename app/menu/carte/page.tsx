'use client'

import CARTE_MENU from '../../../data/carte.json';
import MenuItem from '@components/general/MenuItem';

export default function Carte() {
    const ENTREE = CARTE_MENU.entrees;
    const SOUP = CARTE_MENU.soup;
    const VEGETARIAN = CARTE_MENU.vegetarian;
    const PAD = CARTE_MENU['pad-thai'];
    const NOODLE = CARTE_MENU.noodle;
    const GRILLING = CARTE_MENU.grilling;
    const STIR = CARTE_MENU['stir-fry'];

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
                        <p className='text-lg font-source'><b>Entrées / Appetizers</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {ENTREE.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'entree_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-2/5 flex flex-col'>
                        <p className='text-lg font-source'><b>Petites Soupes / Small Soups</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {SOUP.map((item, index) => {
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
                        <p className='text-lg font-source'><b>Plats Végétariens / Vegetarian Dishes</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {VEGETARIAN.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'vege_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/4 flex flex-col'>
                        <p className='text-lg font-source'><b>Pad Thai</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {PAD.map((item, index) => {
                            return (
                                <div className='w-full flex justify-between font-open' key={'pad_key' + index}>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            )
                        })}
                    </section>

                    <section className='w-full sm:pt-7 md:w-1/3 flex flex-col'>
                        <p className='text-lg font-source'><b>Nouilles Croustillantes / Crispy Noodles</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {NOODLE.map((item, index) => {
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
                    <p className='text-lg text-center font-source'><b>Grillades à l&apos;asiatique / Asian style grillings</b></p>
                    <section className='w-full grid md:grid-cols-2 gap-5 md:gap-7 pt-4'>
                        {GRILLING.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'grlling_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>

                <section className='w-3/4 flex flex-col pt-10'>
                    <p className='text-lg text-center font-source'><b>Nos Sautés / Our stir fires</b></p>
                    <p className='text-center text-xs'><i>*Servis avec choix de riz ou vermicelles</i></p>
                    <section className='w-full grid md:grid-cols-3 gap-5 md:gap-7 pt-4'>
                        {STIR.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.english} price={item.price} key={'stir_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}