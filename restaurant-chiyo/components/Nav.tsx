import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
    return (
        <nav className='flex-between w-full mb-16 pt-3 pl-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/icons/LEGO_logo.svg.png'
                    alt='chiyo logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p>Restaurant Chiyo</p>
            </Link>
        </nav>
    )
}