import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './Button';

export default function Nav() {
    return (
        <nav className='w-full p-4 flex flex-row justify-between'>
            <Link href='/' className='flex gap-2'>
                <Image
                    src='/assets/icons/LEGO_logo.svg.png'
                    alt='chiyo logo'
                    width={35}
                    height={35}
                    className='object-contain'
                />
                <div className='flex flex-col justify-center md:flex-row md:gap-x-2 md:items-center'>
                    <h1>Restaurant</h1>
                    <h2>Chiyo</h2>
                </div>
            </Link>
            <div className='flex flex-col justify-center md:hidden'>
                <MenuButton></MenuButton>
            </div>
            <div className='flex flex-row justify-between gap-2 items-center sm:hidden'>
                <h1>MENU</h1>
                <h1>MENU</h1>
                <h1>MENU</h1>
            </div>
        </nav>
    )
}