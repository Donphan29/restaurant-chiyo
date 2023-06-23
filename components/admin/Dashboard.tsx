import { useState } from 'react';
import { DATABASE } from '@constants/Constants';
import MainArea from './MainArea';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

export default function Dashboard() {
    const [db, setDb] = useState(DATABASE[0]);

    const handleClick = (index: number) => {
        setDb(DATABASE[index]);
    }

    return (
        <section className='flex justify-evenly pt-14'>
            <MenuList className='w-1/4 p-4 outline outline-1 rounded-md'>
                <p className='font-mont_reg text-gray-400'>INFORMATION</p>
                <MenuItem className='font-source' onClick={() => { handleClick(0) }}>Horaire</MenuItem>
                <p className='font-mont_reg text-gray-400'>MENU</p>
                <MenuItem onClick={() => { handleClick(1) }}>À la carte</MenuItem>
                <MenuItem onClick={() => { handleClick(2) }}>Déssert</MenuItem>
                <MenuItem onClick={() => { handleClick(3) }}>Spécial Midi</MenuItem>
                <MenuItem onClick={() => { handleClick(4) }}>Sushi</MenuItem>
                <MenuItem onClick={() => { handleClick(2) }}>Table d'hôte</MenuItem>
            </MenuList>
            <MainArea db={db}></MainArea>
        </section>
    )
}
