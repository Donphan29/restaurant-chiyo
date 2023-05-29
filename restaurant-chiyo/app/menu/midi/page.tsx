import MenuItem from "@components/MenuItem"

export default function Midi() {
    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/6 md:h-1/3 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-midi.webp")' }}
            >
                <h1 className='font-bebas text-7xl'>Menu Midi</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center font-mont_reg text-white '>
                <p className='text-center pt-4'>
                    *Tous les repas incluent un biscuit, thé ou café*
                </p>

                <section className='w-1/3 flex flex-col justify-center'>
                </section>
            </section>
        </section>
    )
}