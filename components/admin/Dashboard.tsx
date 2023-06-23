import { useState } from 'react';
import Async from '@components/general/Async';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Collection from '@components/admin/Collection';

export default function Dashboard() {
    const [menu, setMenu] = useState('schedule');

    return (
        <section className='flex justify-evenly pt-14'>
            <MenuList className='w-1/4 p-4 outline outline-1 rounded-md'>
                <p className='font-mont_reg text-gray-400'>INFORMATION</p>
                <MenuItem className='font-source' onClick={() => { setMenu('schedule') }}>Horaire</MenuItem>
                <p className='font-mont_reg text-gray-400'>MENU</p>
                <MenuItem onClick={() => { setMenu('entrees') }}>À la carte</MenuItem>
                <MenuItem onClick={() => { setMenu('soup') }}>Déssert</MenuItem>
                <MenuItem onClick={() => { setMenu('vegetarian') }}>Spécial Midi</MenuItem>
                <MenuItem onClick={() => { setMenu('pad-thai') }}>Sushi</MenuItem>
                <MenuItem onClick={() => { setMenu('lmaoooo') }}>Table d'hôte</MenuItem>
            </MenuList>
            <section className='w-2/3 outline outline-1 rounded-md font-source'>
                <Async>
                    {Collection({ db: 'carte', collection: menu })}
                </Async>
            </section>
        </section>
    )
}