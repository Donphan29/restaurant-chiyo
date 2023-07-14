import { Bebas_Neue, Montserrat, Source_Sans_Pro, Open_Sans } from 'next/font/google';

export const bebas_neue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bebas-neue',
});

export const montserrat_reg = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat-reg',
})

export const montserrat_thin = Montserrat({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat-thin',
})

export const source = Source_Sans_Pro({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-source',
})

export const open = Open_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open',
})