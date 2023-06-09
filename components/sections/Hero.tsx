import Image from 'next/image';

export default function Hero() {
    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-5/6 bg-cover bg-center flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/home.webp")' }}
            >
                <Image
                    src='/assets/icons/Chiyo.png'
                    alt='chiyo logo'
                    width={240}
                    height={240}
                    className='object-contain'
                />
                <h1 className='font-mont_thin text-2xl pt-2 text-center'>Fusion Asiatique</h1>
            </div>
        </section>
    )
}