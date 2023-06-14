'use client';

import { signOut } from 'next-auth/react';
import Button from '@mui/material/Button'

export default function Logout() {
    return (
        <div className='w-full h-1/3'>
            <Button variant='outlined' className='font-source ml-4 mt-4' color='error' onClick={() => signOut()}>Log Out</Button>
        </div>
    )
}