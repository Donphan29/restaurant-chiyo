import Hero from '@components/Hero';
import Menu from '@components/Menu';
import Gallery from '@components/Gallery';
import Info from '@components/Info';

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
