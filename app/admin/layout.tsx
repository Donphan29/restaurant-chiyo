import { NextAuthProvider } from './providers';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body>
            <NextAuthProvider>{children}</NextAuthProvider>
        </body>
    );
}