'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styles from '@styles/Card.module.css';

export default function MenuCard({
    title, menu, description
}: {
    title: string;
    menu: string;
    description: string;
}) {
    return (
        <Card sx={{ minWidth: 250, maxWidth: 325, maxHeight: 650, bgcolor: '#0000' }} className={styles.card}>
            <CardActionArea>
                <Link href={'/menu/' + menu} underline='always'>
                    <CardMedia
                        sx={{ height: 450 }}
                        image={'/assets/images/menu/' + menu + '.webp'}
                        title={title}
                    />
                </Link>
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant='h5' color='#ffff' className='font-source'>
                    {title}
                </Typography>
                <Typography gutterBottom variant='body2' color='#ffff' className='font-open'>
                    {description}
                </Typography>
                <Link href='/menu/midi' underline='always' color='#ffff' className='font-open'>
                    Voir Menu
                </Link>
            </CardContent>
        </Card>
    )
}