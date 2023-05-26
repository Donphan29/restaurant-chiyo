'use client';

import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';
import Link from '@mui/material/Link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

export default function Menu() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 80
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40
        }
    };

    return (
        <section id='menu' className='w-full h-screen'>
            <div className='w-full flex flex-row justify-between items-center pl-14 pr-14'>
                <h1 className='text-7xl'>MENU</h1>
                <Link href='/assets/pdf/menu-2022.pdf'>
                    <h2>menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </Link>
            </div>

            {/* Carousel of Menus */}
            <Carousel responsive={responsive} className='pl-2 md:pl-14 pt-14 pb-14' partialVisible>

                {/* Menu Midi */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className='card'>
                    <CardActionArea>
                        <Link href='#' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-midi.JPG'
                                title='Menu Midi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            Menu Midi
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='#' underline='always'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Sushi */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className='card'>
                    <CardActionArea>
                        <Link href='#' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-sushi.JPG'
                                title='Sushi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            Sushi
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='#' underline='always'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Table d'hôte */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className='card'>
                    <CardActionArea>
                        <Link href='#' underline='always'>
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-table.JPG'
                                title="Table d'hôte"
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            Table d'hôte
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='#' underline='always'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* À la carte */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className='card'>
                    {/* <CardActionArea> */}
                    <Link href='#' underline='always'>
                        <CardMedia
                            sx={{ height: 400 }}
                            image='/assets/images/menu-carte.JPG'
                            title='À la carte'
                        />
                    </Link>
                    {/* </CardActionArea> */}
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            À la carte
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='#' underline='always'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* Déssert */}
                <Card sx={{ minWidth: 250, maxWidth: 350, maxHeight: 600, bgcolor: '#0000' }} className='card'>
                    {/* <CardActionArea> */}
                    <Link href='#' underline='always'>
                        <CardMedia
                            sx={{ height: 400 }}
                            image='/assets/images/menu-dessert.JPG'
                            title='Déssert'
                        />
                    </Link>
                    {/* </CardActionArea> */}
                    <CardContent>
                        <Typography gutterBottom variant='h5' color='#ffff'>
                            Déssert
                        </Typography>
                        <Typography gutterBottom variant='body2' color='#ffff'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href='#' underline='always'>
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>
            </Carousel>;
        </section>
    )
}
