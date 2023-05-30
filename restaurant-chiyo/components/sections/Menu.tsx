'use client';

import 'react-multi-carousel/lib/styles.css';
import { RESPONSIVE_CARDS } from '../../constants/Constants';

import Carousel from 'react-multi-carousel';
import Link from '@mui/material/Link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import styles from '@styles/Card.module.css';

export default function Menu() {
    return (
        <section id='menu' className='w-full h-5/6'>
            <div className='w-full flex flex-row justify-between items-center pl-14 pr-14'>
                <h1 className='font-mont_reg text-7xl'>MENU</h1>
                <Link href='/assets/pdf/menu-2022.pdf'>
                    <h2>menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </Link>
            </div>

            {/* Carousel of Menus */}
            <Carousel responsive={RESPONSIVE_CARDS} className='pl-2 md:pl-14 pt-14 pb-14' partialVisible>

                {/* Menu Midi */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className={styles.card}>
                    <CardActionArea>
                        <Link href='/menu/midi' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-midi.webp'
                                title='Menu Midi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff' className='font-bebas'>
                            Menu Midi
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff' className='font-roboto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='/menu/midi' underline='always' className='font-roboto' color='#ffff'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Sushi */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className={styles.card}>
                    <CardActionArea>
                        <Link href='/menu/sushi' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-sushi.webp'
                                title='Sushi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff' className='font-bebas'>
                            Sushi
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff' className='font-mont_reg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='/menu/sushi' underline='always' className='font-mont_reg' color='#ffff'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Table d'hôte */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className={styles.card}>
                    <CardActionArea>
                        <Link href='/menu/table' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-table.webp'
                                title="Table d'hôte"
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff' className='font-mont_reg'>
                            Table d'hôte
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff' className='font-mont_thin'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='/menu/table' underline='always' className='font-mont_thin' color='#ffff'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* À la carte */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className={styles.card}>
                    <CardActionArea>
                        <Link href='/menu/carte' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-carte.webp'
                                title='À la carte'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff' className='font-source'>
                            À la carte
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff' className='font-open'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='/menu/carte' underline='always' color='#ffff' className='font-open'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Déssert */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className={styles.card}>
                    <CardActionArea>
                        <Link href='/menu/dessert' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-dessert.webp'
                                title='Déssert'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            Déssert
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='/menu/dessert' underline='always' color='#ffff'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>
            </Carousel>;
        </section>
    )
}