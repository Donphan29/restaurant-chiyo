'use client';
import Link from '@mui/material/Link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Menu() {
    return (
        <section id='menu' className='w-full h-screen'>
            <div className='w-full flex flex-row justify-between items-center pl-14 pr-14'>
                <h1 className='text-7xl'>MENU</h1>
                <Link href='/assets/pdf/menu-2022.pdf'>
                    <h2>menu complet <ArrowRightAltIcon></ArrowRightAltIcon></h2>
                </Link>
            </div>

            {/* CARD LIST - Menus */}
            <div className='w-full flex flex-row flex-nowrap gap-8 pt-14 pl-14'>

                {/* CARD - Menu Midi */}
                <Card sx={{ minWidth: 300, maxWidth: 400, maxHeight: 600 }}>
                    <CardActionArea>
                        <Link href="#" underline="always">
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-midi.JPG'
                                title='Menu Midi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Menu Midi
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href="#" underline="always">
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>

                {/* CARD - Menu Sushi */}
                <Card sx={{ minWidth: 300, maxWidth: 400, maxHeight: 600 }}>
                    <CardActionArea>
                        <Link href="#" underline="always">
                            <CardMedia
                                sx={{ height: 400 }}
                                image='/assets/images/menu-sushi.JPG'
                                title='Menu Sushi'
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Sushi
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <Link href="#" underline="always">
                            Voir Menu
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
