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
