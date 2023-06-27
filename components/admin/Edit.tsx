import { IconButton, ThemeProvider } from '@mui/material';
import { THEME } from '@constants/Theme';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';

export default function Edit({
    db, collection
}: {
    db: string;
    collection: string;
}) {
    const [formData, setFormData] = useState<any[]>([]);

    useEffect(() => {
        fetchCollection(db, collection)
    });

    const fetchCollection = async (db: string, collection: string) => {
        const response = await fetch(`http://localhost:3000/api/collection?db=${db}&collection=${collection}`);
        if (!response.ok) throw new Error(`Error code: ${response.status}`);
        const data = await response.json();
        setFormData(data.data);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (index: number, event: any) => {
        let data = [...formData];
        data[index][event.target.name] = event.target.value;
        setFormData(data);
    };

    const handlePriceChange = (index: number, event: any) => {
        let data = [...formData];
        console.log('In handle before change')
        console.log(formData)
        data[index]['price'] = Number(event.target.value);
        console.log('After change')
        console.log(data)
        setFormData(data);
        console.log('After set')
        console.log(formData)
    };

    // const COLLECTION = await fetchCollection(db, collection);

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            {formData.map((item: { name: string, description?: string, english?: string, price: number }, index: number) => {
                return (
                    <section key={index} className='w-full flex pb-4 gap-4'>
                        <p>{index + 1}</p>

                        <ThemeProvider theme={THEME}>
                            <section className='w-full flex flex-col gap-4'>
                                <TextField
                                    id={'name id' + index}
                                    label='Name'
                                    name='name'
                                    fullWidth
                                    defaultValue={item.name}
                                    color='primary'
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    onChange={(event) => handleInputChange(index, event)}
                                />

                                {item.english ? <TextField
                                    id={'english id' + index}
                                    label='English'
                                    name='english'
                                    fullWidth
                                    defaultValue={item.english}
                                    color='primary'
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    onChange={(event) => handleInputChange(index, event)}
                                /> : <></>}

                                {item.description ? <TextField
                                    id={'description id' + index}
                                    label='Description'
                                    name='description'
                                    fullWidth
                                    defaultValue={item.description}
                                    color='primary'
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    onChange={(event) => handleInputChange(index, event)}
                                /> : <></>}

                                <TextField
                                    id={'price id' + index}
                                    label='Price'
                                    name='price'
                                    type='number'
                                    defaultValue={item.price}
                                    color='primary'
                                    sx={{ input: { color: 'white' } }}
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    onChange={(event) => handlePriceChange(index, event)}
                                />
                            </section>
                        </ThemeProvider>
                    </section>
                )
            })}
            <IconButton color='secondary' type='submit'><SaveIcon></SaveIcon></IconButton>
        </form >
    )
}
