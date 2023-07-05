import Link from 'next/link';
import Image from 'next/image';
import MenuDrawer from '../general/MenuDrawer';

export default function Nav() {
    return (
        <nav className='w-full p-4 flex flex-row justify-between'>
            <Link href='/' className='flex gap-2'>
                <Image
                    src='/assets/icons/Chiyo.png'
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
                <MenuDrawer></MenuDrawer>
            </div>
            <div className='flex flex-row justify-between gap-2 items-center sm:hidden'>
                <Link href='#menu'><h1>MENU</h1></Link>
                <Link href='#gallery'><h1>GALERIE</h1></Link>
                <Link href='#info'><h1>INFO</h1></Link>
            </div>
        </nav>
    )
}