import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Test from '@components/admin/Test';

interface AsyncProps {
    children: Promise<React.ReactNode>;
}

function Async({ children }: AsyncProps) {
    const [resolvedChildren, setResolvedChildren] = useState<React.ReactNode | null>(null);

    // When the component is mounted, resolve the Promise
    useEffect(() => {
        if (children) {
            children.then((result) => {
                setResolvedChildren(result);
            });
        }
    }, [children]);

    // If the Promise has not been resolved yet, return null
    if (resolvedChildren === null) {
        return null;
    }

    // Otherwise, return the resolved JSX.Element
    return <>{resolvedChildren}</>;
}

export default function Dashboard() {
    const [menu, setMenu] = useState('');

    return (
        <section className='flex justify-evenly pt-14'>
            <MenuList className='w-1/3 p-4 outline outline-1 rounded-md font-source'>
                <p className='font-mont_reg text-gray-400'>INFORMATION</p>
                <MenuItem className='font-source'>Horaire</MenuItem>
                <p className='font-mont_reg text-gray-400'>MENU</p>
                <MenuItem onClick={() => { setMenu('entrees') }}>À la carte</MenuItem>
                <MenuItem onClick={() => { setMenu('soup') }}>Déssert</MenuItem>
                <MenuItem onClick={() => { setMenu('vegetarian') }}>Spécial Midi</MenuItem>
                <MenuItem onClick={() => { setMenu('pad-thai') }}>Sushi</MenuItem>
                <MenuItem onClick={() => { setMenu('lmaoooo') }}>Table d'hôte</MenuItem>
            </MenuList>
            <section className='w-1/2 outline outline-1 rounded-md font-source'>
                <Async>
                    {Test({ db: 'carte', collection: menu })}
                </Async>
            </section>
        </section>
    )
}