import Hero from '@components/sections/Hero';
import Menu from '@components/sections/Menu';
import Gallery from '@components/sections/Gallery';
import Info from '@components/sections/Info';
import GalleryMobile from '@components/sections/GalleryMobile';

export default function Home() {
    return (
        <section>
            <Hero></Hero>
            <Menu></Menu>
            <div className='sm:hidden'><Gallery></Gallery></div>
            <div className='md:hidden'><GalleryMobile></GalleryMobile></div>
            <Info></Info>
        </section>
    );
}
