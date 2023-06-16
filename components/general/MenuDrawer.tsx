'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MinimizeIcon from '@mui/icons-material/Minimize';

import { MENUS } from '@constants/Constants';

type Anchor = 'top';

export default function MenuDrawer() {
    const [state, setState] = React.useState({ top: false });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 'auto', backgroundColor: 'black' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='flex justify-end mt-12 mr-8'><MinimizeIcon fontSize='large' color='error'></MinimizeIcon></div>
            <List sx={{ mb: '15%' }}>
                <ListItem key='home' disablePadding>
                    <ListItemButton className='justify-center'>
                        <Link href='/' underline='none' color='#ffff' className='font-open text-xl'>
                            Accueil
                        </Link>
                    </ListItemButton>
                </ListItem>
                {MENUS.map((menu) => (
                    <ListItem key={menu.menu} disablePadding sx={{ mt: '8%' }}>
                        <ListItemButton className='justify-center'>
                            <Link href={'/menu/' + menu.menu} underline='none' color='#ffff' className='font-open text-center text-xl'>
                                {menu.title}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {(['top'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} className='font-open text-white'>MENU</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}