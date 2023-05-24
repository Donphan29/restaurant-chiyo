import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './Button';

export default function Nav() {
    return (
        <nav className='w-full pt-3 pl-3 pb-3 pr-3 flex flex-row justify-between'>
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
            <MenuButton></MenuButton>
        </nav>
    )
}