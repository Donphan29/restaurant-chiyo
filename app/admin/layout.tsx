import { NextAuthProvider } from './providers';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextAuthProvider>{children}</NextAuthProvider>
    );
}