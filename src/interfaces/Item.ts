export interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
    maintenanceLevel: number;
    rating: number;
    type: string;
    boughtWith: string[];
    appearsInCart: number;
}
