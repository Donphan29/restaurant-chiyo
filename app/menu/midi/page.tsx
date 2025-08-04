import MIDI_MENU from '../../../data/midi.json';
import MenuItem from '@components/general/MenuItem';

export default async function Midi() {
    const ENTREE = MIDI_MENU.entrees;
    const GRILLING = MIDI_MENU.grilling;
    const STIR = MIDI_MENU['stir-fry'];
    const COMBO = MIDI_MENU.combo;
    const SOUP = MIDI_MENU.soup;

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
                        <p className='text-lg font-source'><b>Les Grillades</b></p>
                        <hr className='border border-white w-full mx-auto mb-1' />
                        {GRILLING.map((item, index) => {
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
                        {STIR.map((item, index) => {
                            if (item.order === 9) return (
                                <div className='w-full font-open' key={'stir_key' + index}>
                                    <p>{item.name}</p>
                                    <div className='w-full'>
                                    { item.type?.map((type, i) => (
                                        <div className='w-full flex justify-between font-open' key={'type_key' + i}>
                                            <p className='indent-12'>{type}</p>
                                            <p className='text-right'>{item.price[i]}</p>
                                        </div>
                                    ))}
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
                        {SOUP.map((item, index) => {
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
                        {COMBO.map((item, index) => {
                            return (<MenuItem name={item.name} description={item.description} price={item.price} key={'combo_key' + index}></MenuItem>)
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}