'use client';

import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button'

export default function Login() {
    return (
        <div className='w-full h-1/3 text-white flex justify-items-center'>
            <Button variant='contained' className='font-source ml-4 mt-4' color='error' onClick={() => signIn('google')}>Log in</Button>
        </div>
    )
}