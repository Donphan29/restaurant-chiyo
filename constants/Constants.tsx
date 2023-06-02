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
];

export const MENUS = [
    {
        title: 'Menu Midi',
        menu: 'midi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        title: 'Sushi',
        menu: 'sushi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        title: "Table d'hôte",
        menu: 'table',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        title: 'À la carte',
        menu: 'carte',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        title: 'Déssert',
        menu: 'dessert',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
];

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

export const SCHEDULE = [
    {
        "day": "Lundi",
        "opening-hours": {
            "morning": null,
            "evening": null
        },
        "isClosed": true
    },
    {
        "day": "Mardi",
        "opening-hours": {
            "morning": null,
            "evening": null
        },
        "isClosed": true
    },
    {
        "day": "Mercredi",
        "opening-hours": {
            "morning": ["11:00", "2:00"],
            "evening": ["4:30", "9:00"]
        },
        "isClosed": false
    },
    {
        "day": "Jeudi",
        "opening-hours": {
            "morning": ["11:00", "2:00"],
            "evening": ["4:30", "10:00"]
        },
        "isClosed": false
    },
    {
        "day": "Vendredi",
        "opening-hours": {
            "morning": ["11:00", "2:00"],
            "evening": ["4:30", "10:00"]
        },
        "isClosed": false
    },
    {
        "day": "Samedi",
        "opening-hours": {
            "morning": null,
            "evening": ["4:30", "10:00"]
        },
        "isClosed": false
    },
    {
        "day": "Dimanche",
        "opening-hours": {
            "morning": null,
            "evening": null
        },
        "isClosed": true
    }
]