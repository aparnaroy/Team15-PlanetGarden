// new landscapies yay

export interface Landscape {
    name: string;
    description: string;
    // include image, not sure how to do this yet
    price: number;
    seasons: [string];
    maintenance: number;
    //items: [Tree | Flower];
}

export interface Tree {
    name: string;
    description: string;
    // include image
    quantity: number;
    maintenance: number;
    rating: number;
}

export interface Flower {
    name: string;
    description: string;
    // include image, not sure how to do this yet
    quantity: number;
    maintenanceLevel: number;
    rating: number;
}

export interface Greenery {
    name: string;
    description: string;
    // include image, not sure how to do this yet
    quantity: number;
    maintenanceLevel: number;
    price: number;
    rating: number;
}

export interface Structure {
    name: string;
    description: string;
    // include image, not sure how to do this yet
    quantity: number;
    rating: number;
}
