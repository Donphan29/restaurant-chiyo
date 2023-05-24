import '@styles/globals.css';

import Nav from '@components/Nav';

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
        <html lang='fr'>
            <body className='main'>
                <Nav></Nav>
                {children}
            </body>
        </html>
    );
}
