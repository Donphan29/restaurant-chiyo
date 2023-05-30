export const RESPONSIVE_CARDS = {
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

export const RESPONSIVE_LIGHTBOX = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export const GALLERY = [
    {
        src: '/assets/images/gallery/pizza.webp',
        alt: 'pizza',
    },
    {
        src: '/assets/images/gallery/sushi2.webp',
        alt: 'sushi2',
    },
    {
        src: '/assets/images/gallery/anana.webp',
        alt: 'anana',
    },
    {
        src: '/assets/images/gallery/sushi1.webp',
        alt: 'sushi1',
    }
]