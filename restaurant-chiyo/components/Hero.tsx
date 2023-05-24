import Image from 'next/image';

export default function Hero() {
    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-5/6 bg-cover bg-center flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/home.JPG")' }}
            >
                <Image
                    src='/assets/icons/LEGO_logo.svg.png'
                    alt='chiyo logo'
                    width={240}
                    height={240}
                    className='object-contain'
                />
                <h1>Cuisine Vietnamienne - Thaïlandaise - Japonaise</h1>
            </div>
        </section>
    )
}