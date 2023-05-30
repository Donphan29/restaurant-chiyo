import Hero from '@components/sections/Hero';
import Menu from '@components/sections/Menu';
import Gallery from '@components/sections/Gallery';
import Info from '@components/sections/Info';

export default function Home() {
    return (
        <section>
            <Hero></Hero>
            <Menu></Menu>
            <Gallery></Gallery>
            <Info></Info>
        </section>
    );
}
