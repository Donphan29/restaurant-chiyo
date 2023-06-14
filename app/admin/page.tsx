'use client';

import { useSession } from 'next-auth/react'
import Login from '@components/admin/Login';
import Logout from '@components/admin/Logout';

export default function Admin() {
    const { data: session, status } = useSession({ required: true })

    if (status === 'loading') {
        return <Login></Login>
    }

    return (
        <div>
            <Logout></Logout>

            <section className='w-full h-2/3 flex flex-col text-center text-white'>
                <p>Logged in as {session.user?.email}</p>
            </section>
        </div>
    )
}