import { Item } from "./Item";

export interface User {
    id: number;
    name: string;
    cart: Item[];
}
