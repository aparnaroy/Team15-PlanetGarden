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
    image: string;
    quantity: number;
    maintenanceLevel: number;
    price: number;
    rating: number;
    type: string;
}

export interface Flower {
    name: string;
    description: string;
    image: string;
    quantity: number;
    maintenanceLevel: number;
    price: number;
    rating: number;
    type: string;
}

export interface Greenery {
    name: string;
    description: string;
    image: string;
    quantity: number;
    maintenanceLevel: number;
    price: number;
    rating: number;
    type: string;
}

export interface Structure {
    name: string;
    description: string;
    image: string;
    quantity: number;
    maintenanceLevel: number;
    price: number;
    rating: number;
    type: string;
}
