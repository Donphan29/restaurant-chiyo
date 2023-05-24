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
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
