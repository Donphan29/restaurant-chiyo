import { useState } from 'react';
import MainArea from './MainArea';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

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
            <MainArea collection={menu}></MainArea>
        </section>
    )
}