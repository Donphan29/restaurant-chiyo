/* Tab implementation inspired by Material UI documentation */

import { useState } from 'react';
import Async from '@components/general/Async';
import Collection from '@components/admin/Collection';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

interface Database {
    db: string;
    collections: string[]
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MainArea({
    db
}: {
    db: Database
}) {
    const [value, setValue] = useState(0);
    const [edit, setEdit] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleEdit = () => {
        setEdit(!edit);
    };

    const displayEdit = (edit: boolean) => {
        if (!edit) {
            return (
                <Box sx={{ width: '100%' }}>
                    {db.collections.map((collection, index) => {
                        return (
                            <TabPanel value={value} index={index}>
                                <Async>
                                    {Collection({ db: db.db, collection: collection })}
                                </Async>
                                <div className='w-full flex justify-end'>
                                    <IconButton color='secondary' onClick={() => { handleEdit() }}><EditIcon></EditIcon></IconButton>
                                </div>
                            </TabPanel>
                        )
                    })}
                </Box>
            )
        } else {
            return (
                <Box sx={{ width: '100%' }}>
                    {db.collections.map((collection, index) => {
                        return (
                            <TabPanel value={value} index={index}>
                                <div className='w-full flex justify-end'>
                                    <IconButton color='secondary' onClick={() => { handleEdit() }}><EditIcon></EditIcon></IconButton>
                                </div>
                            </TabPanel>
                        )
                    })}
                </Box>
            )
        }
    };

    return (
        <section className='w-2/3 outline outline-1 rounded-md font-source'>
            <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='collection tabs'
                    textColor='inherit'
                    indicatorColor='secondary'
                    centered
                >
                    {db.collections.map((collection, index) => {
                        return (
                            <Tab label={collection} {...a11yProps(index)} />
                        )
                    })}
                </Tabs>
            </Box>
            {displayEdit(edit)}
        </section>
    )
}
