import '@styles/globals.css';

import Nav from '@components/sections/Nav';
import Footer from '@components/sections/Footer';
import { bebas_neue, montserrat_reg, montserrat_thin, source, open } from './fonts';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'Restaurant Chiyo',
    description: 'Fusion asiatique',
    icons: {
        icon: '/assets/icons/Chiyo.png'
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='fr' className={`${bebas_neue.variable} ${montserrat_reg.variable} ${montserrat_thin.variable} ${source.variable} ${open.variable}`}>
            <body className='bg-black'>
                <Nav></Nav>
                {children}
                <Footer></Footer>
                <Analytics />
            </body>
        </html>
    );
}
