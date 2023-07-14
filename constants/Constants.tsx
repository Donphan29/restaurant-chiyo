export const MENUS = [
    {
        title: 'Menu Midi',
        menu: 'midi',
        description: 'Entrées, grillades, sautés, soupes repas et combinaisons.',
    },
    {
        title: 'Sushi',
        menu: 'sushi',
        description: 'Sashimis, mini-makis, tartares, futomakis, combinaisons, makis, frits et spécialités.',
    },
    {
        title: "Table d'hôte",
        menu: 'table',
        description: "Repas servis avec une soupe, un rouleau et un café ou du thé.",
    },
    {
        title: 'À la carte',
        menu: 'carte',
        description: 'Entrées, soupes, plats végés, pad-thai, nouilles croustillantes, grillades et sautés.',
    },
    {
        title: 'Déssert',
        menu: 'desert',
        description: 'Bananes frites, crêmes glacées frites, breuvages et autres.',
    },
];

export const RESPONSIVE_CARDS = {
    xl: {
        breakpoint: { max: 3000, min: 1801 },
        items: 4,
        partialVisibilityGutter: 90
    },
    lg: {
        breakpoint: { max: 1800, min: 1025 },
        items: 3,
        partialVisibilityGutter: 100
    },
    md3: {
        breakpoint: { max: 1024, min: 911 },
        items: 2,
        partialVisibilityGutter: 75
    },
    md2: {
        breakpoint: { max: 912, min: 820 },
        items: 2,
        partialVisibilityGutter: 60
    },
    md: {
        breakpoint: { max: 819, min: 541 },
        items: 2,
        partialVisibilityGutter: 55
    },
    sm2: {
        breakpoint: { max: 540, min: 512 },
        items: 1,
        partialVisibilityGutter: 150
    },
    sm: {
        breakpoint: { max: 511, min: 411 },
        items: 1,
        partialVisibilityGutter: 55
    },
    xs: {
        breakpoint: { max: 410, min: 390 },
        items: 1,
        partialVisibilityGutter: 40
    },
    xxs: {
        breakpoint: { max: 389, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
    }
};

export const RESPONSIVE_LIGHTBOX = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 1023, min: 0 },
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
