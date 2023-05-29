import '@styles/globals.css';

import Nav from '@components/Nav';
import { bebas_neue, roboto_mono, montserrat_reg, montserrat_thin, source, open } from './fonts';

export const metadata = {
    title: 'Restaurant Chiyo',
    description: 'Fusion asiatique',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='fr' className={`${bebas_neue.variable} ${roboto_mono.variable} ${montserrat_reg.variable} ${montserrat_thin.variable} ${source.variable} ${open.variable}`}>
            <body className='bg-black'>
                <Nav></Nav>
                {children}
            </body>
        </html>
    );
}
