'use client';

import { useSession } from 'next-auth/react'

import Dashboard from '@components/admin/Dashboard';
import Login from '@components/admin/Login';
import Logout from '@components/admin/Logout';

export default function Admin() {
    const { data: session, status } = useSession({ required: true })

    if (status === 'loading') {
        return <Login></Login>
    }

    return (
        <section>
            <Logout></Logout>

            <section className='w-full h-2/3 flex flex-col text-white pl-14 pr-14'>
                <p className='text-center font-open'>Logged in as {session.user?.email}</p>
                <Dashboard></Dashboard>
            </section>
        </section>
    )
}